# Thigs to do
El plan consiste en la implementación de un proyecto de React en donde pondremos en práctica la utilización de componentes para crear un App de notas.

## Archivo NotesManager.js 
Este archivo define una clase NotesManager que gestiona las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de notas para un usuario específico en una API.

El constructor inicializa las propiedades username, setter (un setter de estado para actualizar las notas) y URL de la API.
- Métodos:
  - getNotes(): Obtiene las notas del usuario desde la API.
  - resetNotes(): Restaura todas las notas del usuario a su estado inicial.
  - createNote(): Crea una nueva nota para el usuario en la API.
  - updateNote(): Actualiza una nota existente en la API.
  - deleteNote(): Elimina una nota existente en la API.
    
- Se utiliza fetch para realizar peticiones HTTP a la API, manejando las respuestas y errores correspondientes.
- Se utiliza el método #options para construir las opciones de la solicitud, como el método HTTP y el cuerpo JSON.
- Se utiliza el modificador de acceso # para indicar que el método options es privado y solo accesible dentro de la clase.

Este archivo, trabaja en conjuntos con diversos componentes, veámos cada uno de ellos:

### Componente: Home
El componente HomePage es la página principal de la aplicación. Incluye un encabezado que muestra el nombre de usuario y un botón de salida. Tiene un diseño dividido en una barra lateral y un contenedor de notas. Utiliza un estado para alternar la visibilidad de la papelera de reciclaje. Renderiza el componente Sidebar para la navegación y CreateNote y Notes para crear y mostrar notas respectivamente, dependiendo del estado de visibilidad de la papelera. También renderiza el componente Trash si se muestra la papelera de reciclaje.

### Componente: colorPalleteButton
El componente ColorPaletteButton es un botón que despliega una paleta de colores cuando se hace clic. Al hacer clic en un color de la paleta, se actualiza el color seleccionado y se ejecuta una función de actualización opcional. Utiliza un estado local para controlar la visibilidad de la paleta de colores. Los colores disponibles se definen en una matriz y se representan como cuadrados coloreados en la paleta.

### Componente: createNote
El componente CreateNote es un formulario para crear una nueva nota. Tiene campos para ingresar el título y el contenido de la nota, así como un botón para guardar la nota. También incluye un botón para seleccionar el color de la nota mediante una paleta de colores. Utiliza estados locales para gestionar el título, contenido, color y mensajes de error. Está estilizado con CSS modules para una apariencia coherente.

### Componente: Header
El componente Header muestra un título de bienvenida personalizado con el nombre de usuario almacenado en el localStorage. Incluye un botón de salida que activa una función pasada como prop (handleState). Está estilizado utilizando CSS modules para mantener los estilos encapsulados y modulares.

### Componente: Login
El componente LoginForm es un formulario de inicio de sesión que solicita al usuario ingresar su nombre de usuario. Tiene un estado local para almacenar el nombre de usuario y mensajes de error. Cuando el usuario hace clic en el botón "Enter", valida que el nombre de usuario no esté vacío y llama a la función onLogin para realizar el inicio de sesión. Está estilizado utilizando CSS modules para una apariencia consistente.

### Componente: noteCard
El componente NoteCard representa una nota en la aplicación. Permite editar el título y el contenido de la nota. Incluye opciones para cambiar el color de la nota, marcarla como eliminada o restaurarla, fijarla o desfijarla y eliminarla permanentemente. Utiliza estados locales para gestionar el color, el estado de edición y el contenido editado de la nota. Está estilizado con CSS modules para una apariencia consistente.

### Componente: notes
El componente Notes muestra todas las notas del usuario, divididas en notas fijadas y otras notas. Para cada nota, se renderiza el componente NoteCard, que permite actualizar el color, el contenido y el estado de la nota. Utiliza funciones de manejo de eventos para actualizar y eliminar notas a través del componente NotesManager. Además, está estilizado con CSS modules para una apariencia coherente. Si no hay notas fijadas u otras notas, se muestra un mensaje indicando que no hay notas disponibles.

### Componente: Sidebar
El componente Sidebar es una barra lateral de navegación que permite alternar entre las secciones de notas y papelera de reciclaje. Incluye dos botones con iconos representativos y texto descriptivo para cada sección. Al hacer clic en un botón, se activa la función setShowTrash para cambiar entre las secciones de notas y papelera de reciclaje. Está estilizado con CSS modules para una apariencia coherente.

### Componente: trash
El componente Trash muestra todas las notas eliminadas, permitiendo al usuario visualizar y restaurarlas si es necesario. Utiliza el componente NoteCard para representar cada nota eliminada, proporcionando opciones para actualizar y eliminar permanentemente las notas. Utiliza funciones de manejo de eventos para realizar operaciones de actualización y eliminación en las notas. Está estilizado con CSS modules para una apariencia coherente.
