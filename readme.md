### Herramientas

- Husky
- Commit-lint
- DokerHub
- Firebase Console

## Qué es [Husky](https://typicode.github.io/husky/)?

Husky es un módulo de Node.js que se integra con el sistema de control de versiones **Git** y te permite configurar acciones o scripts que se ejecutan automáticamente en ciertos momentos clave del flujo de trabajo de desarrollo. Principalmente son scripts que se ejecutan en respuesta a eventos específicos en **Git**, como antes de un commit (pre-commit), antes del push (pre-push), después de clonar un repositorio (post-clone), entre otros.

Esto nos permite ejecutar pruebas automatizadas, realizar análisis de código estático, formatear el código o cualquier otra tarea que desees automatizar en tu flujo de trabajo de desarrollo.

#### Instalación

1. Instalar Husky en nuestro repositorio:

```
npm install husky --save-dev
```

2. Una vez instalado podremos ver en nuestro **package.json**
   un nuevo comando con el que podremos iniciar Husky para conseguir la configuracion inicial.

```
     "scripts": {
    [...]
    "prepare": "husky install"
  }

```

Ahora podemos ejecutar

```
npm prepare
```

Y este comando no creará una carpeta en la raiz del proyecto llamada **.husky** y dentro otra carpeta **\_**
donde se encuentra la configuración para poder capturar las acciones de git y realizar las acciones que queramos.

3.  dentro de la carpeta **.husky** tendremos que crear 2 archivos
    3.1 El primer archivo lo llamaremos **pre-commit** y añadiremos las siguientes líneas de codigo:

```
    #!/bin/sh

    . "$(dirname "$0")/\_/husky.sh"

    npm test

```

_1. #!/bin/sh: Esta línea indica el intérprete de comandos que se utilizará para ejecutar el script, en este caso, el shell (sh)._

_2. "$(dirname "$0")/*/husky.sh": Esta línea carga el script de Husky. El $(dirname "$0") obtiene la ruta del directorio actual donde se encuentra el script y */husky.sh es la ruta relativa al script de Husky. El punto (.) antes del script indica que se debe ejecutar dentro del contexto actual en lugar de lanzar un nuevo shell._

_3. npm test: Esta línea ejecuta el comando npm test, que generalmente se utiliza para ejecutar las pruebas automatizadas de un proyecto de Node.js. Puede reemplazarse con cualquier otro comando o script que se desee ejecutar en un evento específico de Git. En este caso antes del commit_

## Qué es [commit-lint](https://commitlint.js.org/#/)?

Commitlint es una herramienta que se utiliza para validar y aplicar convenciones a los mensajes de commit en un repositorio de control de versiones, como Git. Se basa en reglas y configuraciones definidas por el equipo de desarrollo para mantener un estilo y estructura coherente en los mensajes de commit.

La idea principal detrás de Commitlint es mejorar la calidad y consistencia de los mensajes de commit, lo cual puede facilitar la revisión del historial de cambios, la colaboración entre desarrolladores y la comprensión del propósito de cada commit.

Commitlint se puede integrar con herramientas de control de versiones y sistemas de integración continua para validar automáticamente los mensajes de commit y rechazar aquellos que no cumplan con las reglas definidas. Esto ayuda a fomentar buenas prácticas de desarrollo y mantener la consistencia en el flujo de trabajo del equipo.

Antes de continuar con la instalación me gustaria exponer las reglas de los Conventional Commit y que así nos sea mas sencillo trabajar con esta herramienta.

#### [Conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)

Los Conventional Commits es una convención para estructurar y etiquetar los mensajes de commit de manera consistente en un proyecto de desarrollo de software. Esta convención busca facilitar la comprensión y seguimiento de los cambios realizados en el repositorio.

La estructura básica de un Conventional Commit consta de tres partes:

```
    <tipo>(ámbito): <descripción>
```

##### Tipo

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

##### Ámbito

El campo ámbito es opcional y sirve para dar información contextual como por ejemplo indicar el nombre de la feature a la que afecta el commit.

##### Descripción

Breve descripción del cambio cumpliendo lo siguiente:

- Usa imperativos, en tiempo presente: “añade” mejor que “añadido” o “añadidos”.
- La primera letra siempre irá en minúscula.
- No escribir un punto al final.

#### Cómo instalar commit-lint?

1.Instalar la dependencia:

```
npm install --save-dev @commitlint/config-conventional @commitlint/cli
```

2. En nuestro **package.json** tenemos que añadir las siguientes líneas:

```
 "commitlint": {
    "extends": "@commitlint/config-conventional"
  },

```

Y nos quedaría de esta forma:

```
[...]
  "scripts": {
    "start": "webpack serve --config=webpack.dev.js",
    "build": "webpack --config=webpack.prod.js",
    "test": "jest --coverage --passWithNoTests",
    "lint": "semistandard",
    "prepare": "husky install"
  },
  "commitlint": {
    "extends": "@commitlint/config-conventional"
  },
[...]

```

_La configuración "extends": "@commitlint/config-conventional" establece que el proyecto utilizará la configuración convencional predefinida para validar los mensajes de commit utilizando commitlint._

Ahora gracias a husky podemos validar nuestros mensajes de commit antes de que se ejecuten si añadimos dentro de la carpeta **.husky** un archivo llamado **commit-msg**
con el siguiente código:

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1

```

_Las primeras líneas ya sabemos lo que hacen de el [ejemplo anterior](#qué-es-husky)_

_La última línea utiliza npx para ejecutar el comando commitlint con la opción --edit. La variable $1 se utiliza para pasar argumentos al script, en este caso, el mensaje de commit. Esto permite que commitlint valide el mensaje ingresado por el usuario._

**Ahora ya podemos ejecutar los test y validar nuestros mensajes de commit de manera automática!!**

## PIPELINE

Un pipeline es una serie de pasos automatizados que se ejecutan para construir, probar y desplegar un proyecto de software. Ofrece un enfoque estructurado y automatizado para gestionar el ciclo de vida del desarrollo de software, lo que permite una entrega más rápida y confiable de aplicaciones y actualizaciones.

En GitLab sigue la siguiente estructura:

```
stages:
  -
  -
  -
build:
  stage:
  image:
  script:
    -
    -
  dependencies:
    -
  artifacts(?):
    paths:
      -
```

Para el stage de Docker necesitaremos lo siguiente:

```
deploy:
  stage: Deploy
  image: docker:20.10.14-alpine3.15
  dependencies:
    - build

  services:
    - docker:dind
  before_script:
    - 'PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: ''{ print $2 }'' | sed ''s/[",]//g'' | tr -d ''[[:space:]]'')'
    - docker login -u $DOCKER_HUB_USER -p $DOCKER_HUB_PASS
  script:
    - docker build -t $DOCKER_HUB_USER/$CI_PROJECT_NAME:$PACKAGE_VERSION .
    - docker push $DOCKER_HUB_USER/$CI_PROJECT_NAME:$PACKAGE_VERSION
```

_'services: - docker:dind': Aquí se especifica el servicio de Docker en Docker (dind) que se utilizará para ejecutar los comandos de Docker dentro del contenedor de CI._

_'PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: ''{ print $2 }'' | sed ''s/[",]//g'' | tr -d ''[[:space:]]'')': Esta línea de código extrae la versión del paquete desde un archivo package.json y la almacena en la variable PACKAGE_VERSION._
