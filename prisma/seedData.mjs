import moment from 'moment';

export const about
    = {
    bio: 'Hi My name is Mehdi HYANI I\'m a fullstack software developer, passionate about what I do and always up to the task. With more than 2 years experience developing and maintaining web applications, I\'m always keeping up with the latest technologies and always making sure my projects are up to the satisfaction of the users. I am currently a computer science student working as part-time Product manager at neoCedrus. My interests include but not limited to: Front-end Development, Back-end development, Database management, Cybersecurity, Machine Learning, Deep Learning, DevOps.',
    email: 'me@mehdihyani.me',
    firstName: 'Mehdi',
    id: 'portfolio-mehdi-hyani',
    image: 'https://mehdi-hyani.ams3.cdn.digitaloceanspaces.com/Portfolio/me.JPG',
    lastName: 'hyani',
    phoneNumber: '+212632933177',
    resume: 'https://mehdi-hyani.ams3.cdn.digitaloceanspaces.com/Portfolio/Mehdi_HYANI_CV.pdf',
    heroQuote: '"The computer was born to solve problems that did not exist before." --Bill Gates',
    websitePreview : 'https://mehdi-hyani.ams3.cdn.digitaloceanspaces.com/Portfolio/preview.png',
}

export const skillCategories = [
        {
            name: 'Programming, Markup and Style Sheet Languages',
            skills: [
                {
                    name: 'Typescript',
                    level: 'expert',
                    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
                },
                {
                    name: 'Javascript',
                    level: 'expert',
                    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
                },
                {
                    name: 'HTML5',
                    level: 'expert',
                    image: 'https://cdn-icons-png.flaticon.com/512/174/174854.png',
                },
                {
                    name: 'CSS3',
                    level: 'expert',
                    image: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
                },
                {
                    name: 'SQL',
                    level: 'expert',
                    image: 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png',
                },
                {
                    name: 'JAVA',
                    level: 'expert',
                    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png',
                },
                {
                    name: 'Python',
                    level: 'expert',
                    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
                },
                {
                    name: 'C',
                    level: 'expert',
                    image: 'https://cdn-icons-png.flaticon.com/512/3665/3665923.png',
                },
                {
                    name: 'C++',
                    level: 'expert',
                    image: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png',
                },
                {
                    name: 'C#',
                    level: 'expert',
                    image: 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png',
                },
                {
                    name: 'Go',
                    level: 'intermediate',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png',
                },
                {
                    name: 'Lua',
                    level: 'beginner',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/2048px-Lua-Logo.svg.png',
                },
            ]
        },
        {
            name: 'Front End Libraries and Frameworks',
            skills: [
                {
                    name: 'React',
                    level: 'expert',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
                },
                {
                    name: 'Angular',
                    level: 'intermediate',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
                },
                {
                    name: 'Vue',
                    level: 'intermediate',
                    image: 'https://images2.imgbox.com/1b/e9/uEYAbF1w_o.png',
                },
                {
                    name: 'Next',
                    level: 'expert',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png',
                },
                {
                    name: 'Nuxt',
                    level: 'beginner',
                    image: 'https://seeklogo.com/images/N/nuxt-logo-5EF50E1ABD-seeklogo.com.png',
                },
                {
                    name: 'Bootstrap',
                    level: 'expert',
                    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png',
                },
                {
                    name: 'Gatsby',
                    level: 'expert',
                    image: 'https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png',
                },
            ]
        },
        {
            name: 'Backend End Frameworks',
            skills: [
                {
                    name: 'Node.js',
                    level: 'expert',
                    image: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
                },
                {
                    name: 'Express',
                    level: 'expert',
                    image: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png',
                },
                {
                    name: 'Deno',
                    level: 'intermediate',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Deno.svg/1200px-Deno.svg.png',
                },
                {
                    name: 'Fastify',
                    level: 'intermediate',
                    image: 'https://seeklogo.com/images/F/fastify-logo-4FA5E177B6-seeklogo.com.png',
                },
                {
                    name: 'Nest',
                    level: 'intermediate',
                    image: 'https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-rht97vsn.png',
                },
            ]
        },
        {
            name: 'Mobile and MultiPlatform Frameworks',
            skills: [
                {
                    name: 'Electron',
                    level: 'intermediate',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png',
                },
                {
                    name: 'Ionic',
                    level: 'intermediate',
                    image: 'https://www.microtronixesolutions.com/images/2016/10/11/ionic.png',
                },
                {
                    name: 'React Native',
                    level: 'intermediate',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                },
                {
                    name: 'Kotlin',
                    level: 'intermediate',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png'
                },
            ]
        },
        {
            name: 'Databases',
            skills: [
                {
                    name: 'postgreSQL',
                    level: 'expert',
                    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png'
                },
                {
                    name: 'mongoDB',
                    level: 'expert',
                    image: 'https://www.pngall.com/wp-content/uploads/13/Mongodb-Transparent.png'
                },
                {
                    name: 'MySQL',
                    level: 'expert',
                    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png'
                },
                {
                    name: 'mariaDB',
                    level: 'beginner',
                    image: 'https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_blue-transparent.png'
                },
                {
                    name: 'cockroachDB',
                    level: 'beginner',
                    image: 'https://avatars.githubusercontent.com/u/6748139?s=280&v=4'
                },
                {
                    name: 'oracleDB',
                    level: 'beginner',
                    image: 'https://companieslogo.com/img/orig/ORCL-d5a587ae.png'
                },
            ]
        },
        {
            name: 'DevOps',
            skills: [
                {
                    name: 'Git',
                    level: 'expert',
                    image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
                },
                {
                    name: 'Github CI/CD Actions',
                    level: 'intermediate',
                    image: 'https://cdn-icons-png.flaticon.com/512/3291/3291695.png'
                },
                {
                    name: 'Docker',
                    level: 'intermediate',
                    image: 'https://cdn-icons-png.flaticon.com/512/5969/5969059.png'
                },
                {
                    name: 'Jenkins',
                    level: 'intermediate',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png'
                },
                {
                    name: 'AWS',
                    level: 'intermediate',
                    image: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png'
                },
                {
                    name: 'AWS EC2',
                    level: 'intermediate',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg/2048px-AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg.png'
                },
                {
                    name: 'Digital Ocean',
                    level: 'intermediate',
                    image: 'https://seeklogo.com/images/D/digitalocean-icon-logo-88BAC483CC-seeklogo.com.png'
                },
                {
                    name: 'Heroku',
                    level: 'intermediate',
                    image: 'https://cdn-icons-png.flaticon.com/512/873/873120.png'
                },
                {
                    name: 'Kubernetes',
                    level: 'intermediate',
                    image: 'https://juststickers.in/wp-content/uploads/2018/11/kubernetes-wordmark.png'
                },
                {
                    name: 'Vercel',
                    level: 'intermediate',
                    image: 'https://image.pitchbook.com/hG77CP8UhJjUMH6f59hnUSo3p2V1608196200048_200x200'
                },
            ]
        },
    ]

export const experiences = [
    {
        company: 'neoCedrus',
        companyUrl: 'https://neocedrus.com/',
        image: 'https://media.licdn.com/dms/image/C4D0BAQFrJKmF4I2aAA/company-logo_200_200/0/1613555065064?e=1680739200&v=beta&t=f7kuZ-dSqfhq5yeuoVDxNiJ91DQcJuROrA6NUz8GYm0',
        isCurrent: false,
        startDate: moment("20210701", "YYYYMMDD").toDate(),
        title: 'Software Developer',
        endDate: moment("20221101", "YYYYMMDD").toDate(),
        jobResponsibilities: [
            'Developing user stories both frontend and backend',
            'Fixing UX/UI/Backend bugs',
            'Setting up end-to-end or unit test related to projects core functionalities',
            'Reviewing Pull Requests',
            'Working on projects consisting of Students mentoring booking and campus access system, as well as systems for public Moroccan administrations'
        ],
        jobType: 'partTime'
    },
    {
        company: 'neoCedrus',
        companyUrl: 'https://neocedrus.com/',
        image: 'https://media.licdn.com/dms/image/C4D0BAQFrJKmF4I2aAA/company-logo_200_200/0/1613555065064?e=1680739200&v=beta&t=f7kuZ-dSqfhq5yeuoVDxNiJ91DQcJuROrA6NUz8GYm0',
        isCurrent: true,
        startDate: moment("20221201", "YYYYMMDD").toDate(),
        title: 'Product Manager',
        jobResponsibilities: [
            'Meeting with different products clients',
            'Organizing and managing hiring rounds',
            'Coordinating team efforts',
            'Organizing weekly agile meetings',
            'Developing user stories both frontend and backend',
            'Fixing UX/UI/Backend bugs',
            'Setting up end-to-end or unit test related to projects core functionalities',
            'Reviewing Pull Requests',
            'Working on projects consisting of Students mentoring booking and campus access system, as well as systems for public Moroccan administrations'
        ],
        jobType: 'partTime'
    },
];

export const socials = [
    {
        name: 'mehdi-hyani-github',
        image: 'https://cdn-icons-png.flaticon.com/512/3291/3291695.png',
        url: 'https://github.com/BR4INL3SS'
    },
    {
        name: 'mehdi-hyani-linkedin',
        image: 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png',
        url: 'https://www.linkedin.com/in/mehdi-hyani-aa02a11aa/'
    },
    {
        name: 'mehdi-hyani-discord',
        image: 'https://cdn-icons-png.flaticon.com/512/5968/5968756.png',
        url: 'https://discordapp.com/users/391704834874540042'
    },
    {
        name: 'mehdi-hyani-instagram',
        image: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
        url: 'https://www.instagram.com/m.hyani/'
    },
    {
        name: 'mehdi-hyani-twitter',
        image: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
        url: 'https://twitter.com/MehdiHyani'
    },
]

export const hobbies = [
    {
        name: 'gaming',
        image: 'https://cdn-icons-png.flaticon.com/512/3612/3612569.png'
    },
    {
        name: 'Listening to music',
        image: 'https://cdn-icons-png.flaticon.com/512/2995/2995101.png'
    },
    {
        name: 'Watching movies (Like a lot...)',
        image: 'https://cdn-icons-png.flaticon.com/512/3418/3418886.png'
    },
    {
        name: 'Unity Game development',
        image: 'https://cdn-icons-png.flaticon.com/512/5969/5969294.png'
    },
    {
        name: 'Video Editing',
        image: 'https://cdn-icons-png.flaticon.com/512/5968/5968525.png'
    },
]

export const projects = [
    {
        title: 'Shortest Path',
        description: 'Simple graph tool that calculates the shortest path using the Dijkstra algorithm',
        githubLink: 'https://github.com/BR4INL3SS/shortest-path',
        technologies: [
            'Data structures and algorithms',
            'Dijkstra Algorithm',
            'Typescript',
            'React',
            'Elastic UI',
            'React Flow'
        ],
        projectLink: 'https://shortest-path.mehdihyani.me'
    },
    {
        title: 'Portfolio Project',
        description: 'This project\'s overall idea is to help people "WORRY MORE ABOUT THE PROJECT, WORRY LESS ABOUT SHOWING OFF", by building a complete portfolio that contains up to 5 of your projects.',
        githubLink: 'https://github.com/BR4INL3SS/PortfolioProject',
        technologies: [
            'Javascript',
            'React',
            'Material UI',
            'GSAP',
            'Node.js',
            'Express.js',
            'MongoDB',
        ],
    },
    {
        title: 'Discord Trivia Bot',
        description: 'Wholesome Discord bot for trivia games in your servers',
        githubLink: 'https://github.com/BR4INL3SS/trivia-discord-bot',
        technologies: [
            'Typescript',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Discord.js'
        ],
    },
    {
        title: 'WEARIT',
        description: 'WEARIT is a [WIP] e-commerce platform for the dummy shop called WEARIT.',
        githubLink: 'https://github.com/BR4INL3SS/wearit',
        technologies: [
            'Typescript',
            'React',
            'Tailwind',
            'Node.js',
            'Express.js',
            'PostgreSQL',
        ],
    },
]