### Herramientas

- Husky
- Commit-lint
- Docker
- Doker-compose
- Firebase Console

## Qué es Husky?

Husky es un módulo de Node.js que se integra con el sistema de control de versiones **Git** y te permite configurar acciones o scripts que se ejecutan automáticamente en ciertos momentos clave del flujo de trabajo de desarrollo.Principalmente son scripts que se ejecutan en respuesta a eventos específicos en **Git**, como antes de un commit (pre-commit), antes del push (pre-push), después de clonar un repositorio (post-clone), entre otros.

Esto nos permite ejecutar pruebas automatizadas, realizar análisis de código estático, formatear el código o cualquier otra tarea que desees automatizar en tu flujo de trabajo de desarrollo.

### Cómo se usa?

#### Instalación

1. Instalar Husky en nuestro repositorio:

```
npm install husky --save-dev
```

2. Habilitar los hooks de git:

```
npx husky install
```

3. Para tener automaticamente los hooks habilitados despues de instalar, edita el package.json

```
npm pkg set scripts.prepare="husky install"
```

## Conventional commit

```
    <tipo>(ámbito): <descripción>
```

### Tipo

El primer elemento es el **tipo** de commit refiriéndose al contenido del commit.

- **feat**: cuando se añade una nueva funcionalidad.
- **fix**: cuando se arregla un error.
- **chore**: tareas rutinarias que no sean específicas de una feature o un error como por ejemplo añadir contenido al fichero .gitignore o instalar una dependencia.
- **test**: si añadimos o arreglamos tests.
- **docs**: cuando solo se modifica documentación.
- **build**: cuando el cambio afecta al compilado del proyecto.
- **ci**: el cambio afecta a ficheros de configuración y scripts relacionados con la integración continua.
- **style**: cambios de legibilidad o formateo de código que no afecta a funcionalidad.
- **refactor**: cambio de código que no corrige errores ni añade funcionalidad, pero mejora el código.
- **perf**: usado para mejoras de rendimiento.
- **revert**: si el commit revierte un commit anterior. Debería indicarse el hash del commit que se revierte.

### Ámbito

El campo ámbito es opcional y sirve para dar información contextual como por ejemplo indicar el nombre de la feature a la que afecta el commit.

### Descripción

Breve descripción del cambio cumpliendo lo siguiente:

- Usa imperativos, en tiempo presente: “añade” mejor que “añadido” o “añadidos”.
- La primera letra siempre irá en minúscula.
- No escribir un punto al final.
