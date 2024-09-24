const container = document.getElementById('container');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const signInForm = document.querySelector('.sign-in-container');
const signUpForm = document.querySelector('.sign-up-container');

// Cambiar entre formularios de login y registro
switchToRegister.addEventListener('click', () => {
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
});

switchToLogin.addEventListener('click', () => {
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
});

// Función para manejar el registro
document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita el envío por defecto del formulario

    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        alert(data.message);

        if (response.ok) {
            // Si el registro fue exitoso, cambia al formulario de login
            switchToLogin.click();
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Función para manejar el inicio de sesión
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita el envío por defecto del formulario

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        alert(data.message);

        if (response.ok) {
            // Si el login fue exitoso, redirige a otra página (ej. dashboard)
            window.location.href = '/dashboard'; // Cambia esto por la ruta adecuada
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
