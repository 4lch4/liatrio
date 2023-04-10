# Liatrio-API

This directory is home to the API portion of the Liatrio exercise.

## Usage

In order to use this API you must perform the following steps individually or all at once using the Taskfile CLI.

### Taskfile

If you have the [Taskfile CLI][0] installed you can run `task start` which will build the Docker image and then start it as a container.

### Individually

If you'd like to start the API by running the commands individually you'll want to run the following:

```bash
# Build the Docker image.
docker build -t 4lch4/liatrio-api:latest .

# Start the app container.
docker run -d -p 8080:8080 --name liatrio-api 4lch4/liatrio-api:latest
```

[0]: https://taskfile.dev/installation
