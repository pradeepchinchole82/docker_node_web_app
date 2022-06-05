node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'pradeepchinchole1982') {

        def customImage = docker.build("pradeepchinchole1982/dockerwebapp")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}


