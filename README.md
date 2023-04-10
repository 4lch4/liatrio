# Liatrio Exercise

This directory is where I'll be storing files related to the hiring exercise provided to me by Liatrio.

## Usage

In order to manage/operate the project you must first have the [Taskfile CLI][0] installed. At which point, you can run the following commands.

### Fresh Start

If this is your first time working with the repository then you'll need to do the following:

1. Create an EKS cluster.
2. Create the Docker image for the API.
3. Push the image to a remote registry.
4. Deploy the app to your EKS cluster.
5. Finally, perform some tests to validate it was all done correctly.

To make this as simple as possible, you can run `task fresh` and it will automatically run all the commands needed for everything just mentioned.

At the time of writing, steps 1-3 are working as expected. Steps 4 & 5 are still being developed and once done, this message will disappear.

### Individual Commands

If you wish to start everything up from scratch with individual commands then you can do so with the following:

1. `task eks:build`
   1. Builds the EKS cluster in AWS.
   2. This command can take anywhere from 10-20 minutes, depending on your hardware and connection.
2. `task api:build`
   1. Build the API into a Docker image.
3. `task api:push`
   1. Pushes the built Docker image to the configured remote registry.


[0]: https://taskfile.dev/installation
