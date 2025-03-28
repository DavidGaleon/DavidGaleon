document.querySelectorAll('.feature').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('descripcion').textContent = item.getAttribute('data-desc');
    });
});

// Función para cargar vistas dinámicamente
function cargarVista(vista) {
    const contenido = document.getElementById("contenido");

    if (vista === "login") {
        contenido.innerHTML = `
            <h2>Iniciar Sesión</h2>
            <form onsubmit="return iniciarSesion(event)">
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" required>
                
                <label for="password">Contraseña:</label>
                <input type="password" id="password" required>
                
                <button type="submit">Ingresar</button>
            </form>
            <p>¿No tienes cuenta? <a href="#" onclick="cargarVista('register')">Regístrate aquí</a></p>
        `;
    } 
    else if (vista === "register") {
        contenido.innerHTML = `
            <h2>Registro</h2>
            <form onsubmit="return registrarUsuario(event)">
                <label for="name">Nombre:</label>
                <input type="text" id="name" required>
                
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" required>
                
                <label for="password">Contraseña:</label>
                <input type="password" id="password" required>

                <button type="submit">Registrarse</button>
            </form>
            <p>¿Ya tienes cuenta? <a href="#" onclick="cargarVista('login')">Inicia sesión aquí</a></p>
        `;
    } 
    else if (vista === "dashboard") {
        contenido.innerHTML = `
            <h1>Dashboard</h1>
            <p>Bienvenido al panel de administración de Innova Connect.</p>
            <button onclick="cargarVista('home')">Volver al inicio</button>
        `;
    } 
    else {
        contenido.innerHTML = `
            <section id="caracteristicas">
                <h2>Características Clave</h2>
                <div class="feature" data-desc="Permite rastrear la ubicación en tiempo real para una mejor gestión.">Geolocalización en tiempo real</div>
                <div class="feature" data-desc="Envía alertas instantáneas a los usuarios sobre eventos importantes.">Notificaciones push</div>
                <div class="feature" data-desc="Genera reportes interactivos y gráficos sobre el rendimiento y actividad.">Reportes dinámicos</div>
                <div class="feature" data-desc="Acceso personalizado con autenticación segura.">Inicio de sesión seguro</div>
                <div class="feature" data-desc="Análisis y predicción de datos con inteligencia artificial.">Análisis predictivo</div>
                <p id="descripcion"></p>
            </section>
        `;
    }
}

// Simulación de autenticación
function iniciarSesion(event) {
    event.preventDefault();
    alert("Inicio de sesión exitoso");
    cargarVista('dashboard');
}

// Simulación de registro
function registrarUsuario(event) {
    event.preventDefault();
    alert("Registro exitoso, ahora inicia sesión");
    cargarVista('login');
}

document.querySelectorAll('.feature').forEach(item => {
    item.addEventListener('mouseover', () => {
        document.getElementById('descripcion').textContent = item.getAttribute('data-desc');
    });

    item.addEventListener('mouseleave', () => {
        document.getElementById('descripcion').textContent = "";
    });
});