# challenge-modal
## Overwiew
### Frontend React + Vite
User interface created in reactjs + vite, using TailwindCSS and Material UI as style libraries, <br> it consists of 2 main components:
 - BasicModal: component that opens when clicking the show button
 - CardProfile: card component of the profiles that will be rendered according to the DB

### Backend Python
This is an api to consume data (Model Fruits) from the frontend

## Requirements
### Frontend
- NodeJs ^18.12
- React ^18.2.0
### Backend
- Python ^3.7 
- PGSQL ^14.3

## Setup Backend
1. Clone the repository:
```
git clone https://github.com/AlainEd/challenge-modal.git
```
2. Create a virtual environment and activate it:
```
cd backend
./venv/Scripts/activate
```
3. Install the required packages:
```
pip install -r requirements.txt
```
4. Set up the database:
```
python manage.py migrate
```
5. Set up Data
```
python manage.py loaddata mydata
```
6. Run the server
```
python manage.py runserver
```
You should now be able to access the API at http://localhost:8000.

## EndPoint GET
It is enough to just put the url of the local Django server (currently it does not have JWT to protect the requests to the API)

![image](https://github.com/AlainEd/challenge-modal/blob/main/frontend/src/assets/Imagen1.png)

## Setup Backend
1. Clone the repository:
```
git clone https://github.com/AlainEd/challenge-modal.git
```
2. Install npm
```
cd frontend
npm install
```
3. Run the server
```
npm run dev
```
You should now be able to access the API at http://localhost:5173.

## Test

Pressing the button executes an event that calls the modal
![image](https://github.com/AlainEd/challenge-modal/blob/main/frontend/src/assets/Imagen2.png)

The modal contains the profile search engine in real time, taking into account the name (title) and the description
![image](https://github.com/AlainEd/challenge-modal/blob/main/frontend/src/assets/Imagen3.png)
