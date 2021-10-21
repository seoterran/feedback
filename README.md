
##	API documentation

 * GET localhost:3013/feedbacks `fetch all feedbacks data`
 (The backend port can be modified in .env file in the root folder)

    Response fields 
    
    [
    {
        
        id (string)
        
        date (Date)
        
        userId (string)
        
        sessionId (string)
        
        rating  (number)
        
        comment (string)    
    }
    ]


 * POST localhost:3013/feedbacks `add a new feedback`

    Request body
   
   {
    
        userId (string)
        
        sessionId (string)
        
        rating (number)
        
        comment (string)
        
    }
    

##	Instructions for launching and testing your API locally
- Frontend: 
    Under `frontend` directory
    
    `npm i`
    
    `npm run build`
    
    `npm start`
    
    * You will be taken to the ops team view, please add `/player` to the url to see the player view  
    * Backend endpoint url is hardcoded in src/Apis/feedback.js

- Backend
    Under `backend` directory
    
    `npm i`
    
    `node ./src/index`
    

##	Any other notes you think would be helpful for us while evaluating your work
    * Added additional fields for user and session so you can test if it doesn't allow for a user to submit more than one feedback for the same session
    * Used MongoDB in-memory server which spins up a MongoDB server from within nodejs for testing -> saved feedback data will be reset when restarting the backend



