import { Layout } from '../components/Layout';
import { AppBar } from '../components/AppBar';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';

export const App = () => {
    return (
        <Layout>
            <AppBar />
            <TaskForm />
            <TaskList />
        </Layout>
    );
};
