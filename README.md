# Museo Virtual A-Frame

**¡Prueba el museo ahora!** [https://leandrofrancisco03.github.io/Realidad-virtual-con-a-frame/](https://leandrofrancisco03.github.io/Realidad-virtual-con-a-frame/)

## Descripción

Este proyecto es un museo virtual desarrollado con [A-Frame](https://aframe.io/), que permite a los usuarios explorar obras de arte en un entorno 3D inmersivo. El museo incluye modelos 3D, texturas y música que enriquecen la experiencia del visitante. Este repositorio contiene todo lo necesario para desplegar el museo en un navegador web, con la opción de utilizar herramientas adicionales para desarrollo y monitoreo.

## Tecnologías Utilizadas

- **A-Frame**: Framework para crear experiencias de realidad virtual basadas en web.
- **JavaScript**: Para la lógica interactiva.
- **HTML**: Estructura básica del proyecto.
- **npm**: Utilizado para la inicialización y gestión de paquetes cuando se utiliza A-Frame Watcher.

## Estructura del Proyecto

- `img/`: Contiene las imágenes utilizadas en el museo.
- `js/`: Archivos JavaScript, incluyendo scripts para interactividad y funcionalidades avanzadas.
- `models/`: Modelos 3D utilizados en el museo.
- `music/`: Archivos de música que se reproducen dentro del museo.
- `textures/`: Texturas aplicadas a los modelos 3D.
- `index.html`: Archivo principal que carga el museo virtual en el navegador.
- `package.json`: Archivo de configuración para npm.

## Instrucciones de Instalación

### Clonar el Repositorio

Clona este repositorio en tu máquina local usando:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

## Ejecución en el Navegador

Una vez clonado el repositorio, simplemente abre el archivo `index.html` en tu navegador preferido para empezar a explorar el museo.

## Uso de A-Frame Watcher (Opcional)

Para aquellos que deseen desarrollar o monitorear el proyecto en tiempo real, puedes utilizar A-Frame Watcher:

1. Inicializa npm en el directorio del proyecto:

    ```bash
    npm init
    ```

2. Instala A-Frame Watcher:

    ```bash
    npm install -g aframe-watcher
    ```

3. Ejecuta A-Frame Watcher para monitorear los cambios:

    ```bash
    aframe-watcher
    ```

Esto permitirá que los cambios en los archivos sean reflejados automáticamente en el navegador.

## Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir un "issue" para reportar bugs o sugerir nuevas características. También puedes hacer un "fork" del proyecto y enviar un "pull request" con tus mejoras.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE). Puedes usarlo y modificarlo libremente.
