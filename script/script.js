$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });

    const projects = [
        { title: "Projet 1", description: "Description du projet 1.", link: "#" },
        { title: "Projet 2", description: "Description du projet 2.", link: "#" },
        { title: "Projet 3", description: "Description du projet 3.", link: "#" },
        { title: "Projet 4", description: "Description du projet 4.", link: "#" }
    ];

    function loadProjects() {
        const projectList = $('#project-list');
        projects.forEach(project => {
            const card = `
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                            <a href="${project.link}" class="btn btn-primary">Voir le projet</a>
                        </div>
                    </div>
                </div>
            `;
            projectList.append(card);
        });
    }

    loadProjects();

    $('#load-more').on('click', function() {
        loadProjects();
    });

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        if (name && email && message) {
            alert('Message envoyé avec succès!');
            $('#contact-form')[0].reset();
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });
});