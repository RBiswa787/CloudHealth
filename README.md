# HEALTHCONNECT - REMOTE HEALTHCARE

A robust and scalable remote health care platform utilizing a microservices architecture using React.js, Node.js, and MongoDB. Containerized using Docker. Deployed to AWS EC2 instance. Integrated AWS API Gateway as a reverse proxy to enhance security and manage incoming requests.

## Installation

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

In order to run this container you'll need docker installed.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

### Backend
To start the backend service which will be running in the containers, run the following command from the root of the project

    $ docker-compose build
    $ docker-compose up

### Frontend
To start the frontend server, run the following commands from the root of the project

    $ cd frontend
    $ npm i
    $ npm start

# Features

## User Profiles:
Doctors and Patients can create profiles with their relevant information.

## Doctor Availability:
Doctors can set their availability time slots for appointments.

## Doctor Search:
Patients can search for doctors based on various criteria, such as specialization, location, or availability.

## Appointment Booking:
Patients can book appointments with doctors for the next 7 days.

## Appointment Management:
Both doctors and patients can view and manage their appointments in their respective dashboards.

## Electronic Health Records (EHR):
Patients can upload and update their medical history documents in the secure Electronic Health Records system.

## Access Request:
After successful appointment booking, doctors can request access to the patient's medical documents.

## Patient Consent:
Patients are notified of the access request and can accept or deny the doctor's request.

## Temporary Access:
Upon successful request acceptance, doctors are granted temporary access to the patient's EHR.

## Revoking EHR Access:
Patients can revoke access to their Electronic Health Records after the appointment if needed.

## Video Conference Integration:
A unique video conference room is automatically created for each appointment, containing appointment details, and shared with both the doctor and patient to facilitate remote consultations.

This system aims to streamline the appointment booking process, enhance doctor-patient communication, and provide a secure platform for managing medical records.

## Contributors

@RBiswa787
@Anas-Ahmad-Siddiqui

## License

[MIT](https://choosealicense.com/licenses/mit/)
