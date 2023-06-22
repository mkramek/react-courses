import { Link, Outlet } from 'react-router-dom';

export const About = () => {
    return (
        <main>
            <h1>About Us</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus laborum amet ab cumque sit nihil dolore modi error repudiandae perspiciatis
                atque voluptas corrupti, doloribus ex maiores quam magni mollitia illum dolor quis alias in sequi quod. Sunt ex numquam hic asperiores facere
                natus sapiente cum neque laudantium quam, expedita voluptates atque quia aspernatur saepe illo, rem quasi praesentium aliquid sed inventore
                obcaecati veniam? Nisi magnam vero, dolore praesentium totam ducimus similique asperiores culpa, eius amet repudiandae quam ut. Architecto
                commodi, tempore ut nostrum voluptas dolorum illum voluptatum dolores! Quas perferendis quis alias excepturi eaque voluptatibus eveniet error,
                nulla rem iusto?
            </p>
            <ul>
                <li>
                    <Link to="mission">Read about our mission</Link>
                </li>
                <li>
                    <Link to="team">Get to know the team</Link>
                </li>
                <li>
                    <Link to="reviews">Go through the reviews</Link>
                </li>
            </ul>
            <Outlet />
        </main>
    );
};
