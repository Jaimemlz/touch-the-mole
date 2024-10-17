# Touch the Mole - Progressive Web App (PWA)

¡Bienvenido a **Touch the Mole**! Este proyecto es una aplicación web móvil progresiva (PWA) basada en el clásico juego "Toca al topo". Desarrollada para demostrar mis habilidades técnicas, la aplicación incluye varias funcionalidades como la selección de dificultad, animaciones interactivas, y la capacidad de funcionar sin conexión.

## 🚀 Características

- **Interfaz interactiva**: Juego de topos dinámico donde los usuarios pueden "atrapar" topos que aparecen aleatoriamente en una cuadrícula.
- **Selección de dificultad**: El juego tiene 4 niveles de dificultad: Bajo, Medio, Alto y Extremo. En el nivel Extremo se muestran múltiples topos a la vez y la cuadrícula es de 4x4 en lugar de 3x3.
- **Vibración**: Implementa vibración cuando el jugador hace clic en un topo correcto.
- **Puntaje dinámico**: Se actualiza el puntaje según la dificultad seleccionada, con más puntos otorgados en niveles más difíciles.
- **Funcionalidad offline (PWA)**: La aplicación está completamente funcional en modo offline después de ser visitada una vez. Ideal para jugar en cualquier momento sin conexión a internet.
- **Despliegue en GitHub Pages**: Puedes probar la aplicación en directo aquí: [Touch the Mole](https://jaimemlz.github.io/touch-the-mole).

## 📜 Reglas del Juego

1. **Pantalla de Inicio**: Introduce tu nombre para comenzar. La aplicación validará el nombre antes de iniciar el juego.
2. **Pantalla de Juego**:
   - Selecciona el nivel de dificultad: Bajo, Medio, Alto o Extremo.
   - Haz clic en "Play" para comenzar a jugar.
   - Los topos aparecerán en la cuadrícula, y deberás hacer clic en ellos antes de que desaparezcan.
   - Los puntos se incrementan según el nivel de dificultad seleccionado:
     - **Bajo**: 1000ms por topo, +10 puntos por acierto.
     - **Medio**: 750ms por topo, +20 puntos por acierto.
     - **Alto**: 500ms por topo, +30 puntos por acierto.
     - **Extremo**: 1000ms por topo, +40 pero pueden aparecen varios topos a la vez y la cuadrícula pasa a ser de 4x4.
3. **Topos Malos**: Existe un 20% de posibilidad de que aparezca un "topo malo". Si haces clic en un topo malo, en lugar de sumar puntos, se te restarán puntos.
4. **Funcionalidad de PWA**: La aplicación está configurada como una **PWA (Progressive Web App)**, lo que significa que podrás instalarla en tu dispositivo y usarla sin conexión una vez instalada. Para descargar la aplicación y tenerla disponible como una aplicación en tu móvil o PC, sigue estos pasos:

   - **Inicia sesión** en la aplicación.
   - Después de iniciar sesión, verás un botón con el icono de descargar, que te permitirá instalar la aplicación en tu dispositivo.
   - Una vez instalada, podrás acceder a la aplicación directamente desde tu pantalla de inicio y usarla en modo sin conexión, incluso en modo avión.

## 🛠️ Tecnologías utilizadas

- **Framework**: [Lit](https://lit.dev/)
- **Router**: [Vaadin Router](https://vaadin.com/router)
- **PWA**: Implementada con [vite-plugin-pwa](https://vite-plugin-pwa.netlify.app/)
- **Pruebas unitarias**: [Jest](https://jestjs.io/) y [@open-wc/testing](https://open-wc.org/)
- **Despliegue**: [GitHub Pages](https://pages.github.com/)
- **Linter & Formateo de código**: ESLint y Prettier

## 🚀 Instalación y configuración en local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio

```bash
git clone https://github.com/jaimemlz/touch-the-mole.git
cd touch-the-mole
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

### 4. Construir para producción

```bash
npm run build
```

### 5. Previsualizar la build

```bash
npm run preview
```

### 6. Ejecutar los tests

```bash
npm run test
```

Esto ejecutará las pruebas unitarias configuradas con Jest.

## 📦 Despliegue

El proyecto está desplegado automáticamente usando GitHub Pages. Para desplegar tu versión:

1. Realiza los cambios y haz un commit.
2. Ejecuta el siguiente comando para generar y subir la build a GitHub Pages:

```bash
npm run deploy
```

Esto generará la build de producción y la subirá al branch `gh-pages`.

## 🔍 Mejora continua

El proyecto está configurado con las siguientes herramientas para mantener la calidad del código:

- **ESLint**: Herramienta de análisis estático para encontrar problemas en tu código JavaScript.
- **Prettier**: Formateador de código para asegurar un estilo consistente en todo el proyecto.

Puedes ejecutar el linter con el siguiente comando:

```bash
npm run lint
```

## 🧪 Tests

Los tests unitarios están configurados con **Jest** y **@open-wc/testing**. Cubren las vistas y los componentes principales, como la funcionalidad de puntaje, la lógica del juego y las interacciones del usuario.

```bash
npm run test
```

## 🎮 Mejoras adicionales

- **Topos Malos**: Se ha añadido una posibilidad del 20% de que aparezcan "topos malos". Si haces clic en un topo malo, en lugar de sumar puntos, se restarán puntos.
- **Modo Extremo**: Se ha añadido un nivel de dificultad extra donde aparecen varios topos al mismo tiempo y la cuadrícula cambia a 4x4.
- **Vibración**: Implementada la funcionalidad de vibración en dispositivos móviles cuando se clica en el topo correcto.
- **Validación de Nombre de Usuario**: Antes de que comience el juego, se realiza una validación para asegurarse de que el jugador ha ingresado su nombre. Si el campo de nombre de usuario está vacío, el juego no comenzará y se mostrará un mensaje de error solicitando al jugador que introduzca su nombre.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
