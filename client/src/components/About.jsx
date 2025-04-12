import meImage from '../Images/me.jpg'; // Adjust path based on file location

const About = () => {
    return ( 
        <div>
            <h1>About Me</h1>
            <img src={meImage} width="300" alt="Noah Ings" />
            <p>Talking about me on this page</p>
            <p>
                This is me, Noah Ings.<br />
                I decided to make this site because I have difficulty keeping<br />
                track of my own Yu-Gi-Oh! cards a lot of times.<br />
                So I decided to develop a way where I can know what cards I own<br />
                and how many copies I own.
            </p>
        </div>
    );
}

export default About;
