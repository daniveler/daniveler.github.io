export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.social-media': 'Social Media',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.download-cv': 'Download CV',

    'home.name': 'I\'m Daniel Velerdas',
    'home.text': 'API Engineer, Full-Stack and Mobile Developer',

    'about.text': `Since I finished my degree in Computer Engineering till now, I have not stopped studying and upgrading my developing skills.

    In my first job, I discovered the world of APIs and how they help building efficient and scalable solutions, enabling communications between the different components in the backend.
    
    Thanks to this position, I had the opportunity to collaborate with international teams, gaining valuable insights into different working styles and modeling a global perspective on technologies.
    
    Nowadays, I am actively seeking challenges to enhance my skills, fueled by a strong motivation to continue learning and diving deeper into the fascinating realm of development.`,

    'experience.uxcale.title': 'API Engineer in uXcale',
    'experience.uxcale.date': 'September 2022 - Present',
    'experience.uxcale.text': `- Development of an introductory training program for APIs.
    - Design and specification of internal APIs for employee and activity management.
    - Documentation on numerous API concepts and various technologies, such as OpenAPI, Apigee, Mulesoft, gRPC, AsyncAPI, and GraphQL, among others.
    - Implementation of APIs using different environments such as SpringBoot, NodeJS or GraphQL.
    - Conducting tests and testing with Junit 5 and Mockito.
    - Utilization of API clients such as Postman, Advanced Rest Client, or Insomnia.`,

    'experience.telefonica.title': 'API OB Integration Engineer in Telefónica',
    'experience.telefonica.date': 'January 2022 - Present',
    'experience.telefonica.text': `- Project integration between Telefónica Kernel Global and Vivo Brazil team.
    - Involvement in the analysis and design processes of 4P APIs.
    - Significant contributions to different phases of the API lifecycle.
    - Development and deploy of different integration tools using Node JS, ReactJS and Express.
    - Formal documentation of all processes undertaken, as well as test case generation.`,

    'experience.pixel.title': 'Mobile Developer in Pixel Innova',
    'experience.pixel.date': 'February 2022 - May 2022',
    'experience.pixel.text': `- App Development on Android and iOS.
    - Focus on implementing key functions, such as reading and interpreting QR codes.
    - Efficient data management between applications.
    - Integration with a WebService.`,
    
    'projects.to-do.title': 'To-Do Web Application',
    'projects.to-do.text': 'The idea of this project was making a simple web application using React JS to get familiar with this framework. This app consists in a list of To-do tasks, with a title and status. All tasks created will be displayed at the main page, from where you can create new tasks, update and delete existing ones.',

    'projects.axpe-employees-api.title': 'Axpe Employees API',
    'projects.axpe-employees-api.text': 'Final exercise from a training period on apification. Rest API service for controlling employees of a company, including its OpenAPI 3.0 specification and implementation in Spring Boot.',

    'projects.moviefav.title': 'MovieFav. Movie List App',
    'projects.moviefav.text': 'Mobile Application developed for a technical test, using the Retrofit and Room libraries to read data from an API and to manage a local DB that allows data persistence.',

    'projects.survy.title': 'Survy. Educational app of online surveys and questions',
    'projects.survy.text': 'Final Degree Project for Computer Engineering Degree. Mobile application for managing online surveys and questions in the educational field.',

    'projects.weather-vue.title': 'Weather Vue. Weather Web Application',
    'projects.weather-vue.text': 'Simple VueJS web application to check the actual weather in any city powered by openweathermap API.',
  },
  es: {
    'nav.about': 'Sobre mí',
    'nav.social-media': 'Contacto',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.download-cv': 'Descargar CV',

    'about.text': `Desde que terminé mi carrera en Ingeniería Informática, he continuado estudiando y mejorando mis habilidades de desarrollo. 

    Mi primer trabajo me permitió colaborar con equipos internacionales, adquiriendo perspectivas valiosas sobre diferentes estilos de trabajo y tecnologías. 
    
    Actualmente, busco activamente desafíos para seguir mejorando, impulsado por una fuerte motivación para aprender y profundizar en el desarrollo de software.`,


  },
} as const;