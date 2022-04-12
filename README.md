# Tesla Clone

In this project, we implemented our knowledge from design week, full-stack programming, and agile methodologies to recreate [Tesla website](https://www.tesla.com).

You can find the hosted application at http://dylisthebest.c9tesla.com
## Created by:
### Daniel Escamilla, Emmanuel Massey, Harold Arriola Nucamendi, Jakari Stratton, Rehan Siraj, Tony Lee

## Instructions to run app locally

1. First you must clone this repository and open it in your favorite IDE's terminal (We recommend VSCode).
2. Change directory into the client folder and run "npm i" in console. Change directory into the server folder and repeat the same command. This will initialize the modules needed to run the app.
3. In the server folder, create a file named ".env" and put the following 2 lines:

`SQL_PORT=8000`

`SQL_PASSWORD=password`

4. Edit App.jsx and ContactForm.jsx and replace every instance of "c9tesla.com" to "localhost" to run the app locally.
5. From the server folder terminal, run "nodemon server.js" and wait for successful DB connection message.
6. From the client folder terminal, run "npm start" and wait for the react app to load up on your browser.
7. You can view the API routes on port 8000 and the website on port 3000.

## Design

### Tesla represents cutting edge technology and so the website must be sleek and intuitive. We have 2 Personas for this project:

#### Persona 1: John - Software Developer

John is a Software Developer that only drives within town with no long-distance driving. He recently started looking into electric vehicles due to high gas costs. John is very busy and he usually window shops on his phone. Our website was designed while keeping mobile experience in mind so users like John can navigate and even order a car from their cellphone. The layout must be clean and allow the products to shine, rather than bogging down the user with details. 

#### Persona 2: Kate - Style Blogger

Kate is very active on social media and recently started eyeing her dream car, a Tesla Model Y. Kate is a fan of Apple products and branding and really values the aesthetics of products she buys. When she browses the website to make her purchase, she must get the same polished feeling that she gets when using her favorite Apple products. The layout and design should just "make sense" and be intuitive. 

### Wireframe

We developed our website, using the original Tesla site as our blueprint. We made note of certain key elements such as the slide in menu, and a smooth scrolling landing page with a great scrolling experience for the users.

![Screen Shot 2022-04-11 at 11 21 17 PM](https://user-images.githubusercontent.com/72173514/162875640-353e3054-a32d-4265-a198-2b1cb7462c1f.jpg)

### Teamwork

Our team utilize Monday to assign and manage team tasks. We followed the Agile methodology, working in sprints in our daily meetings and assigning daily tasks to implement and improve webpages and features as we built out the website.
![Screen Shot 2022-04-11 at 11 45 15 PM](https://user-images.githubusercontent.com/72173514/162876189-82430ad5-1661-4f63-b6ce-ccfe594db480.png)

Our team used Github and used branches for each page/feature to work on it. This was a seamless process and we had no issues with our version control. Since the main branch was protected, we were able to ensure all merges to main were intentional and reviewed before approval.

![Screen Shot 2022-04-12 at 12 05 20 AM](https://user-images.githubusercontent.com/72173514/162878195-099c4918-0f33-4954-a7b3-c5abbb975cb0.png)

$$$ Conclusion and Reflection

This project was a great opportunity to apply all the skills we have learned in this cohort while working in a team. This is the closest we have been to working on real world projects in an agile environment. It was a great opportunity for us to learn and grow, but to also get to know each other and build our friendship as peers. 
