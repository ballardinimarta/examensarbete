# Examensarbete #
### About ####

This is the repository for https://doktordrej.vercel.app, a website made for Natalia Ballardini. Also my final work for my education in front end development.
****
### How to use ###

To run this locally clone this repo,
```
$ git clone https://github.com/ballardinimarta/examensarbete.git
```
Then open a termianl in the root of the project and run: 
```
$ npm run frontend
```
The backend is now hosted on heroku so if the backend is started locally, the frontend is still connected to the heroku domain.

Don't forget to add the missing enviroment variables in a .env file in the frontend directory. You will need a access token for the instagram api and name it `accessToken` in the .env file.

****


### Scripts ###
```  
"scripts": {
    "frontend": "cd doktordrej-frontend && npm run dev",
    "backend": "cd doktordrej-backend && npm run develop",
    "unittest": "cd doktordrej-frontend && npx cypress open",
    "componenttest": "cd doktordrej-frontend && npx cypress open-ct"
}
```
I have four scripts for running the app and the testing, you write them from the root folder of the project.<br/>
The two testing scripts open up different cypress environments and that is why they are separate.