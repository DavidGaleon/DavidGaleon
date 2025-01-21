<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Un espacio para motivarte, crecer y alcanzar tu mejor versión. Consejos, herramientas y estrategias de desarrollo personal.">
    <title>Creciendo Día a Día</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
        }
        header {
            background-color: #007bff;
            color: white;
            padding: 1rem 0;
            text-align: center;
        }
        header h1 {
            margin: 0;
            font-size: 2.5rem;
        }
        nav {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            background: #0056b3;
            padding: 0.5rem;
        }
        nav a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }
        nav a:hover {
            text-decoration: underline;
        }
        .hero {
            text-align: center;
            padding: 2rem;
            background: url('https://via.placeholder.com/1200x400') no-repeat center center/cover;
            color: white;
        }
        .hero h2 {
            font-size: 2rem;
            margin: 0;
        }
        .container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 1rem;
        }
        .section {
            margin-bottom: 2rem;
        }
        .section h3 {
            border-bottom: 2px solid #007bff;
            display: inline-block;
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
        }
        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
        }
        .card {
            background: white;
            padding: 1rem;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .card img {
            width: 100%;
            border-radius: 8px;
        }
        .card h4 {
            margin-top: 0.5rem;
            color: #007bff;
        }
        footer {
            text-align: center;
            background: #333;
            color: white;
            padding: 1rem 0;
            margin-top: 2rem;
        }
        footer p {
            margin: 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Creciendo Día a Día</h1>
    </header>
    <nav>
        <a href="#inicio">Inicio</a>
        <a href="#blog">Blog</a>
        <a href="#recursos">Recursos</a>
        <a href="#contacto">Contacto</a>
    </nav>
    <section class="hero">
        <h2>Inspírate y transforma tu vida</h2>
        <p>Descubre herramientas y estrategias para alcanzar tu mejor versión.</p>
    </section>
    <div class="container">
        <section class="section" id="blog">
            <h3>Artículos Recientes</h3>
            <div class="cards">
                <div class="card">
                    <img src="https://via.placeholder.com/300" alt="Artículo 1">
                    <h4>5 Hábitos para un Día Exitoso</h4>
                    <p>Descubre cómo pequeños cambios pueden transformar tus mañanas.</p>
                </div>
                <div class="card">
                    <img src="https://via.placeholder.com/300" alt="Artículo 2">
                    <h4>La Importancia de la Mentalidad Positiva</h4>
                    <p>Aprende a reprogramar tu mente para el éxito.</p>
                </div>
                <div class="card">
                    <img src="https://via.placeholder.com/300" alt="Artículo 3">
                    <h4>Cómo Crear Hábitos que Perduren</h4>
                    <p>Conoce las claves para construir rutinas efectivas.</p>
                </div>
            </div>
        </section>
        <section class="section" id="recursos">
            <h3>Recursos</h3>
            <p>Accede a guías, plantillas y herramientas diseñadas para ayudarte en tu camino al crecimiento personal.</p>
        </section>
        <section class="section" id="contacto">
            <h3>Contacto</h3>
            <p>¿Tienes preguntas o quieres colaborar? Escríbenos a <a href="mailto:info@creciendodiaadia.com">info@creciendodiaadia.com</a>.</p>
        </section>
    </div>
    <footer>
        <p>&copy; 2025 Creciendo Día a Día. Todos los derechos reservados.</p>
    </footer>
</body>
</html>

