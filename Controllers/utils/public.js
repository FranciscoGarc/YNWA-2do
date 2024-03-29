/*
*   Controlador es de uso general en las páginas web del sitio público.
*   Sirve para manejar las plantillas del encabezado y pie del documento.
*/

// Constante para completar la ruta de la API.
const USER_API = 'services/public/cliente.php';
const MARCA_API = 'services/public/marca.php';
// Constante para establecer el elemento del contenido principal.
const MAIN = document.querySelector('main');
MAIN.style.paddingTop = '75px';
MAIN.style.paddingBottom = '100px';
MAIN.classList.add('container');
// Se establece el título de la página web.
document.querySelector('title').textContent = 'YNWA';
// Constante para establecer el elemento del título principal.
const MAIN_TITLE = document.getElementById('mainTitle');
MAIN_TITLE.classList.add('text-center', 'py-3');

/*  Función asíncrona para cargar el encabezado y pie del documento.
*   Parámetros: ninguno.
*   Retorno: ninguno.
*/
const loadTemplate = async () => {
    // Petición para obtener en nombre del usuario que ha iniciado sesión.
    const DATA = await fetchData(USER_API, 'getUser');
    // Se comprueba si el usuario está autenticado para establecer el encabezado respectivo.
    if (DATA.session) {
        // Se verifica si la página web no es el inicio de sesión, de lo contrario se direcciona a la página web principal.
        if (!location.pathname.endsWith('login.html')) {
            // Se agrega el encabezado de la página web antes del contenido principal.
            MAIN.insertAdjacentHTML('beforebegin', `
                <header>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" style="background-color: #CCC8AA" >
                        <div class="container">
                            <a class="navbar-brand" href="index.html"><img src="../../resources/img/logo.png" height="60" alt="YNWA" ></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav ms-auto">
                                
                                <div class="col-3 nav-link">
                                    <div class="">
                                        <input id="nombreMarca" type="text" name="nombreMarca" class="form-control"
                                        placeholder="Busqueda" >
                                    </div>
                                </div>

                                    <li class="nav-item dropdown ">
                                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false"
                                         href="index.html"><i class="bi bi-tags-fill"></i> Marcas</a>
                                        <ul class="dropdown-menu" id="listmarca">
                                            <li><a class="dropdown-item" href="profile.html">Editar perfil</a></li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="#" onclick="logOut()">Cerrar sesión</a></li>
                                        </ul>
                                    </li>
                                    <a class="nav-link" href="cart.html"><i class="bi bi-cart"></i> Carrito</a>
                                    <a class="nav-link" href="cart.html"><i class="bi bi-clock-history"></i> Historial</a>
                                    <a class="nav-link" href="cart.html"><i class="bi bi-person-fill"></i>Cuenta</a>
                                    <a class="nav-link" href="#" onclick="logOut()"><i class="bi bi-box-arrow-left"></i> Cerrar sesión</a>
                                </div>
                            </div>
                        </div>
                    </nav>



                </header>
            `);

            const LISTA_MARCA= document.getElementById('listmarca');

            
        } else {
            location.href = 'index.html';
        }
    } else {
        // Se agrega el encabezado de la página web antes del contenido principal.
        MAIN.insertAdjacentHTML('beforebegin', `
            <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                    <div class="container">
                        <a class="navbar-brand" href="index.html"><img src="../../resources/img/logo.png" height="50" alt="YNWA"></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav ms-auto">
                                <a class="nav-link" href="index.html"><i class="bi bi-tags-fill"></i> Marcas</a>
                                <a class="nav-link" href="signup.html"><i class="bi bi-person"></i> Crear cuenta</a>
                                <a class="nav-link" href="login.html"><i class="bi bi-box-arrow-right"></i> Iniciar sesión</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        `);
    }
    // Se agrega el pie de la página web después del contenido principal.
    MAIN.insertAdjacentHTML('afterend', `
                <footer>
                <nav class="navbar fixed-bottom" id="foot">
                <div class="container-fluid">
                    <div>
                        <h6>YNWA</h6>
                        <p><i class="bi bi-c-square"></i>2024 Todos los derechos reservados</p>
                    </div>
                    <div>
                        <h6>Contáctanos</h6>
                        <p><i class="bi bi-envelope"></i> YNWA@gmail.com</p>
                    </div>
                </div>
            </nav>
                </footer>
            `);
}