Reto de Automatización QA - FrontEnd (Sauce Demo)

Este proyecto contiene la suite de pruebas automatizadas End-to-End para la aplicación web Sauce Demo conj Playwright y Cucumber.

Tecnologías y Frameworks Utilizados
- Herramienta de Automatización:Playwright Test
- Framework BDD: Cucumber.js
- Lenguaje: JavaScript (Node.js)
- Patrón de Diseño:Page Object Model (POM)
- IDE:IntelliJ IDEA

Estrategia de Automatización e Informe Técnico
1. Se definieron escenarios de prueba claros y legibles en lenguaje natural dentro de saucedemo.feature, cubriendo los criterios de aceptación del flujo de compra completo y flujos alternativos.
2. Patrón Page Object Model (POM):Se desacopló la lógica de interacción de las páginas web dividiendo los localizadores e interacciones en tres componentes reutilizables y limpios dentro de la carpeta pages/:
   - login.page.js: Gestión de credenciales (Standard y Locked Out).
   - products.page.js: Interacciones del catálogo y badge del carrito.
   - checkout.page.js: Formulario de datos de envío y confirmación de orden.
3. Manejo de Diferentes Escenarios de Usuario: Inclui pruebas de control para el usuario bloqueado (locked_out_user), validando de forma asertiva los mensajes de restricción de la interfaz.
4. Validaciones Robustas y Esperas: Se implementaron aserciones nativas automáticas de Playwright (expect) asegurando la legibilidad del código y la estabilidad de las pruebas frente a elementos dinámicos.

Instrucciones de Configuración y Execution

1. Requisitos Previos
Tener instalado Node.js en el equipo local, en mi elquipo tengo instalado la siguiente version PS C:\Users\Katy Perales> node -v
v22.14.0

2. Instalación de Dependencias
Para descargar y configurar todos los módulos requeridos, ejecuta en tu terminal:
bash
npm install

3. Ejecución de la Suite de Pruebas
Para iniciar el motor de Cucumber y correr toda la suite de pruebas automatizadas visualmente, ejecuta:
bash
npm test

Reportes
Al finalizar, el resumen detallado de la ejecución de los escenarios funcionales y estados de aserción se imprimen directamente en la consola del sistema operativo.
