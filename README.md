# Cerebranium-backend-API
Backend API developed as a part of the Case study
The backend folder consists of 3 sub folders
The config folder consists of the details required for the connection of the database. The database used is mongoDb<br />

The model folder consists of the schema's. One for the subject and the other for the admin <br />

The route folder consists of various routes for filtering,adding,searching,updating and deleting the detials of the databases<br />

The approach that is used is that the admin has to login in to the system. If he is an existing one and the username and the password matches with the details in the database, the admin would be redirected to the dashboard of the system
If the admin does not have an account then he needs to add the necessary details required.Once the login process is done the admin will be provided with the functionality of adding new subject details
, searching for subjects on the basis of various parameters like the courses taught by the faculty, the admin responsible for adding the details and many more. The admin can also delete a particular subject as well as update the details of the subjects.
Basic validations are also provided to the database. The photos of the testing are available in the testing folder.


