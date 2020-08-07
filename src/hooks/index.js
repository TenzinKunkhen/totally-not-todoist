import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import { collatedTasksExist } from '../helpers';
import moment from 'moment';

// pass in a selected project and if it doesn't exist
// do stuff
export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
        // check everything inside the collection
        let unsubscribe = firebase.firestore().collection('tasks').where('userId', '==', 'atasfdherthyhjwrqer');

        // check if there is a project but no tasks then unsubscribe
        unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ? 
        // then go retrieve unsubscribe where the project id is the selected project
        (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        //check if the task is today
        : selectedProject === 'TODAY'
        //then get the tasks from today
        ? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY')))
        //otherwise if it's inbox go get it from inbox
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;

        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(task => ({
                id: task.id,
                ...task.data(),
            }));
            // put all the tasks into the next 7 days
            setTasks(
                selectedProject === 'NEXT_7'
                ? newTasks.filter(
                    task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                    task.archived !== true
                )
                : newTasks.filter(task => task.archived !== true)
            );
        //otherwise set the tasks into archived tasks
        setArchivedTasks(newTasks.filter(task => task.archived !== false));
        });

        //return when 
        return () => unsubscribe();
    }, [selectedProject]);
    return { tasks, archivedTasks }; 
};


//just get all the projects

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('projects').where('userId', '==', 'atasfdherthyhjwrqer').orderBy('projectId').get().then(snapshot => {
            const allProjects = snapshot.docs.map(project => ({
                ...project.data(),
                docId: project.id,
            }));
            // check if projects are changed to stop infinite rerender
            if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                setProjects(allProjects);
            }
        })
    }, [projects])

    return { projects, setProjects };

}

