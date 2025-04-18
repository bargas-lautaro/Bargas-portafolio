const preguntas = [
  {
    "pregunta": "¿Cómo se clasifica una empresa que cuenta con menos de 10 empleados?",
    "opciones": [
      "Gran empresa",
      "Mediana empresa",
      "Microempresa",
      "Multinacional"
    ]
  },
  {
    "pregunta": "¿Qué tipo de empresa se caracteriza por operar en varios países?",
    "opciones": [
      "Nacional",
      "Pública",
      "Multinacional",
      "Microempresa"
    ]
  },
  {
    "pregunta": "¿Cuál de las siguientes características define a una empresa pública?",
    "opciones": [
      "Es propiedad del Estado",
      "Cotiza en bolsa",
      "Tiene fines de lucro",
      "Opera en varios países"
    ]
  },
  {
    "pregunta": "¿Cómo se clasifica una empresa según el origen de su capital si combina recursos públicos y privados?",
    "opciones": [
      "Mixta",
      "Privada",
      "Cooperativa",
      "Multinacional"
    ]
  },
  {
    "pregunta": "¿Qué tipo de empresa se enfoca en la producción de bienes tangibles?",
    "opciones": [
      "De servicios",
      "Industrial",
      "Comercial",
      "Financiera"
    ]
  },
  {
    "pregunta": "Una empresa que vende productos sin transformarlos es una:",
    "opciones": [
      "Industrial",
      "Comercial",
      "Extractiva",
      "Pública"
    ]
  },
  {
    "pregunta": "¿Cuál es el criterio que se utiliza para clasificar una empresa como pequeña, mediana o grande?",
    "opciones": [
      "Antigüedad",
      "Nivel educativo de los empleados",
      "Cantidad de empleados y volumen de ventas",
      "Cantidad de productos"
    ]
  },
  {
    "pregunta": "¿Qué tipo de empresa tiene como objetivo principal el bienestar de sus miembros y no la obtención de ganancias?",
    "opciones": [
      "Multinacional",
      "Cooperativa",
      "Privada",
      "Industrial"
    ]
  },
  {
    "pregunta": "¿Cómo se clasifica una empresa que brinda servicios como educación o salud?",
    "opciones": [
      "Industrial",
      "Extractiva",
      "De servicios",
      "Mixta"
    ]
  },
  {
    "pregunta": "¿Qué caracteriza a una empresa privada?",
    "opciones": [
      "Pertenece al Estado",
      "Está financiada por el gobierno",
      "Es de propiedad de particulares",
      "No genera ingresos"
    ]
  },
  {
    "pregunta": "¿Qué característica define a una empresa informal?",
    "opciones": [
      "Está registrada legalmente",
      "No paga impuestos ni tiene permisos oficiales",
      "Opera en varios países",
      "Tiene más de 100 empleados"
    ]
  },
  {
    "pregunta": "¿Qué sector agrupa a las empresas que prestan atención médica, educación y recreación?",
    "opciones": [
      "Sector primario",
      "Sector industrial",
      "Sector de servicios",
      "Sector comercial"
    ]
  },
  {
    "pregunta": "¿Cómo se llaman las empresas que están compuestas por varios socios que invierten capital y comparten responsabilidades?",
    "opciones": [
      "Sociedad Anónima",
      "Sociedad Colectiva",
      "Empresa Unipersonal",
      "Empresa Pública"
    ]
  },
  {
    "pregunta": "¿Cuál de estas empresas pertenece al sector primario?",
    "opciones": [
      "Una empresa agrícola",
      "Una tienda de electrodomésticos",
      "Un banco",
      "Una fábrica de autos"
    ]
  },
  {
    "pregunta": "Una empresa que transforma madera en muebles se clasifica como:",
    "opciones": [
      "Comercial",
      "De servicios",
      "Industrial",
      "Financiera"
    ]
  },
  {
    "pregunta": "¿Qué se entiende por empresa unipersonal?",
    "opciones": [
      "Una empresa de un solo empleado",
      "Una empresa con capital extranjero",
      "Una empresa con un solo propietario",
      "Una empresa pública"
    ]
  },
  {
    "pregunta": "¿Cuál es el principal objetivo de una empresa con fines de lucro?",
    "opciones": [
      "Satisfacer necesidades sociales",
      "Promover la cultura",
      "Obtener ganancias económicas",
      "Brindar servicios sin cobrar"
    ]
  },
  {
    "pregunta": "¿Qué tipo de empresa actúa como intermediaria entre productor y consumidor?",
    "opciones": [
      "De servicios",
      "Comercial",
      "Extractiva",
      "Mixta"
    ]
  },
  {
    "pregunta": "¿Qué distingue a una sociedad anónima de otras formas de empresa?",
    "opciones": [
      "Sus acciones se pueden comprar y vender en la bolsa",
      "Está gestionada por una familia",
      "No busca generar ganancias",
      "Opera solo en el campo"
    ]
  },
  {
    "pregunta": "Una empresa que produce energía eléctrica pertenece al sector:",
    "opciones": [
      "Primario",
      "Secundario",
      "Terciario",
      "Cuaternario"
    ]
  },
  {
    "pregunta": "¿Cuál de estas funciones NO forma parte de la organización interna de una empresa?",
    "opciones": [
      "Producción",
      "Finanzas",
      "Publicidad",
      "Investigación judicial"
    ]
  },
  {
    "pregunta": "¿Qué significa que una empresa tenga responsabilidad social?",
    "opciones": [
      "Que maximiza las ganancias",
      "Que solo contrata familiares",
      "Que se preocupa por el impacto en la sociedad y el ambiente",
      "Que opera en la informalidad"
    ]
  },
  {
    "pregunta": "¿Qué tipo de empresa actúa entre las actividades primarias y las terciarias, transformando recursos?",
    "opciones": [
      "Financiera",
      "Industrial",
      "Informal",
      "Pública"
    ]
  },
  {
    "pregunta": "Una empresa que realiza actividades de minería pertenece al sector:",
    "opciones": [
      "Terciario",
      "Secundario",
      "Primario",
      "Cuaternario"
    ]
  },
  {
    "pregunta": "¿Qué criterio se utiliza para clasificar a una empresa como internacional?",
    "opciones": [
      "Vende sus productos en el exterior",
      "Opera en varias provincias",
      "Tiene menos de 10 empleados",
      "Recibe subsidios estatales"
    ]
  },
  {
    "pregunta": "¿Qué ventaja tiene una empresa grande sobre una pequeña?",
    "opciones": [
      "Menores costos por unidad producida",
      "Menor acceso al crédito",
      "Mayor dependencia de proveedores",
      "Menor capacidad de producción"
    ]
  },
  {
    "pregunta": "¿Qué significa que una empresa sea sustentable?",
    "opciones": [
      "Busca generar ganancias rápidas",
      "Opera sin regulaciones",
      "Equilibra lo económico, social y ambiental",
      "Evita toda forma de producción"
    ]
  },
  {
    "pregunta": "¿Qué tipo de empresa está más orientada al desarrollo de conocimiento, software y tecnología?",
    "opciones": [
      "Del sector primario",
      "Del sector cuaternario",
      "Industrial",
      "Comercial"
    ]
  },
  {
    "pregunta": "¿Qué nombre recibe una empresa que opera solo con recursos del Estado?",
    "opciones": [
      "Privada",
      "Pública",
      "Mixta",
      "Cooperativa"
    ]
  },
  {
    "pregunta": "¿Cuál es un ejemplo de empresa del sector terciario?",
    "opciones": [
      "Una empresa minera",
      "Una empresa de turismo",
      "Una fábrica de bicicletas",
      "Una empresa forestal"
    ]
  },
  {
    "pregunta": "¿Cuál de las siguientes empresas pertenece al sector cuaternario?",
    "opciones": [
      "Una empresa de telecomunicaciones",
      "Una empresa de transporte",
      "Una empresa pesquera",
      "Una empresa agrícola"
    ]
  },
  {
    "pregunta": "¿Qué tipo de empresa se caracteriza por reinvertir sus utilidades en vez de repartirlas entre socios?",
    "opciones": [
      "Multinacional",
      "Pública",
      "Cooperativa",
      "Privada"
    ]
  },
  {
    "pregunta": "¿Qué se necesita para formalizar una empresa legalmente?",
    "opciones": [
      "Tener más de cinco empleados",
      "Vender productos en línea",
      "Registrar la empresa y pagar impuestos",
      "Tener una sede central"
    ]
  },
  {
    "pregunta": "¿Cuál es el nombre del documento que establece cómo se organiza una sociedad comercial?",
    "opciones": [
      "Contrato de locación",
      "Estatuto social",
      "Factura de compra",
      "Certificado de origen"
    ]
  },
  {
    "pregunta": "¿Qué tipo de empresa pertenece al sector financiero?",
    "opciones": [
      "Un banco",
      "Una empresa constructora",
      "Una empresa de turismo",
      "Una empresa textil"
    ]
  },
  {
    "pregunta": "¿Qué tipo de responsabilidad tienen los dueños en una empresa unipersonal?",
    "opciones": [
      "Responsabilidad compartida",
      "Responsabilidad limitada",
      "Responsabilidad solidaria",
      "Responsabilidad ilimitada"
    ]
  },
  {
    "pregunta": "¿Qué sector productivo es el primero en la cadena económica?",
    "opciones": [
      "Cuaternario",
      "Secundario",
      "Terciario",
      "Primario"
    ]
  },
  {
    "pregunta": "Una empresa que diseña aplicaciones para celulares pertenece al sector:",
    "opciones": [
      "Primario",
      "Cuaternario",
      "Terciario",
      "Secundario"
    ]
  },
  {
    "pregunta": "¿Qué empresa combina capital público y privado en su funcionamiento?",
    "opciones": [
      "Privada",
      "Mixta",
      "Unipersonal",
      "Cooperativa"
    ]
  },
  {
    "pregunta": "¿Qué característica distingue a una empresa artesanal de una industrial?",
    "opciones": [
      "Utiliza alta tecnología",
      "Produce en serie",
      "La producción es manual y personalizada",
      "Opera en varios países"
    ]
  },
  {
    "pregunta": "¿Qué significa que una empresa sea escalable?",
    "opciones": [
      "Se puede vender fácilmente",
      "Tiene capacidad de crecer sin perder eficiencia",
      "Funciona en un edificio alto",
      "Puede operar sin trabajadores"
    ]
  },
  {
    "pregunta": "¿Qué ventaja suele tener una empresa pequeña frente a una grande?",
    "opciones": [
      "Mayor burocracia",
      "Más capacidad de adaptación",
      "Menor contacto con el cliente",
      "Más empleados"
    ]
  },
  {
    "pregunta": "¿Cuál de estas no es una clasificación común para una empresa?",
    "opciones": [
      "Por tipo de producto",
      "Por color del logotipo",
      "Por tamaño",
      "Por forma jurídica"
    ]
  },
  {
    "pregunta": "¿Qué es el capital humano en una empresa?",
    "opciones": [
      "La cantidad de dinero invertido",
      "Los edificios y oficinas",
      "El conjunto de conocimientos y habilidades del personal",
      "El dinero ganado por ventas"
    ]
  },
  {
    "pregunta": "Una empresa que se dedica a fabricar celulares está en el sector:",
    "opciones": [
      "Terciario",
      "Primario",
      "Secundario",
      "Cuaternario"
    ]
  },
  {
    "pregunta": "¿Cuál es una desventaja común de las empresas informales?",
    "opciones": [
      "Alta carga impositiva",
      "Dificultad para acceder a créditos y beneficios legales",
      "Mayor tecnología",
      "Alta visibilidad pública"
    ]
  },
  {
    "pregunta": "¿Qué forma legal de empresa permite cotizar en la bolsa de valores?",
    "opciones": [
      "Cooperativa",
      "Sociedad de Responsabilidad Limitada",
      "Sociedad Anónima",
      "Empresa unipersonal"
    ]
  },
  {
    "pregunta": "¿Cuál es el objetivo principal de una empresa social?",
    "opciones": [
      "Ganar dinero a toda costa",
      "Lograr impacto social positivo",
      "Reducir sueldos",
      "Exportar productos"
    ]
  },
  {
    "pregunta": "¿Cómo se llama el documento que autoriza el funcionamiento de una empresa formal?",
    "opciones": [
      "Factura",
      "Licencia o habilitación",
      "Presupuesto",
      "Contrato verbal"
    ]
  },
  {
    "pregunta": "Una empresa que ofrece servicios como limpieza y mantenimiento se clasifica como:",
    "opciones": [
      "Extractiva",
      "Industrial",
      "De servicios",
      "Mixta"
    ]
  },
  {
    "pregunta": "¿Qué tipo de empresa suele tener estructuras jerárquicas más simples?",
    "opciones": [
      "Multinacional",
      "Gran empresa",
      "Microempresa",
      "Pública"
    ]
  },
  {
    "pregunta": "¿Qué significa que una empresa tenga integración vertical?",
    "opciones": [
      "Controla varias etapas del proceso productivo",
      "Opera en varios países",
      "Tiene múltiples socios",
      "Depende de subsidios estatales"
    ]
  },
  {
    "pregunta": "¿Cuál de las siguientes funciones forma parte del área de recursos humanos?",
    "opciones": [
      "Fabricación de productos",
      "Reclutamiento y selección de personal",
      "Distribución de mercancías",
      "Diseño de logotipos"
    ]
  },
  {
    "pregunta": "¿Qué define a una franquicia empresarial?",
    "opciones": [
      "Una empresa informal",
      "Un modelo en el que se otorga el derecho de uso de una marca",
      "Una empresa pública",
      "Una empresa de tipo artesanal"
    ]
  },
  {
    "pregunta": "¿Qué sector incluye a las empresas dedicadas a la explotación forestal?",
    "opciones": [
      "Terciario",
      "Primario",
      "Secundario",
      "Financiero"
    ]
  },
  {
    "pregunta": "¿Qué característica tienen las sociedades de responsabilidad limitada (SRL)?",
    "opciones": [
      "Solo pueden operar en zonas rurales",
      "Los socios responden con todo su patrimonio",
      "La responsabilidad está limitada al capital aportado",
      "Solo prestan servicios educativos"
    ]
  },
  {
    "pregunta": "¿Qué elemento NO forma parte de la identidad de una empresa?",
    "opciones": [
      "Misión",
      "Visión",
      "Valores",
      "Rendimiento académico"
    ]
  },
  {
    "pregunta": "¿Qué tipo de empresa se caracteriza por desarrollar investigación y patentes?",
    "opciones": [
      "De servicios",
      "Del sector primario",
      "Del sector cuaternario",
      "Informal"
    ]
  },
  {
    "pregunta": "¿Qué es el mercado objetivo de una empresa?",
    "opciones": [
      "El lugar donde produce",
      "El conjunto de clientes a quienes dirige sus productos o servicios",
      "La competencia directa",
      "Los proveedores externos"
    ]
  },
  {
    "pregunta": "¿Qué departamento de una empresa es responsable del control financiero?",
    "opciones": [
      "Marketing",
      "Producción",
      "Contabilidad",
      "Recursos Humanos"
    ]
  },
  {
    "pregunta": "¿Qué significa el término 'PYME'?",
    "opciones": [
      "Persona y Medios Empresariales",
      "Pequeña y Mediana Empresa",
      "Producción y Marketing Empresarial",
      "Programa Y Manejo Empresarial"
    ]
  },
  {
    "pregunta": "¿Qué diferencia a una empresa estatal de una privada?",
    "opciones": [
      "Que se dedica solo a servicios",
      "Que tiene más empleados",
      "Que pertenece al gobierno",
      "Que no tiene ganancias"
    ]
  },
  {
    "pregunta": "¿Cuál de estas es una desventaja de una empresa muy grande?",
    "opciones": [
      "Mayor flexibilidad",
      "Dificultad para adaptarse rápidamente a cambios",
      "Menor visibilidad de marca",
      "Poca diversificación"
    ]
  },
  {
    "pregunta": "¿Qué característica define a una empresa de economía social?",
    "opciones": [
      "Opera sin legalidad",
      "Está basada en el lucro total",
      "Busca el bienestar colectivo sobre el interés individual",
      "No puede crecer"
    ]
  },
  {
    "pregunta": "¿Qué significa que una empresa tenga 'responsabilidad limitada'?",
    "opciones": [
      "Solo puede contratar un número limitado de empleados",
      "Solo puede funcionar en ciertas regiones",
      "Los socios no arriesgan su patrimonio personal más allá del capital aportado",
      "Tiene limitaciones tecnológicas"
    ]
  },
  {
    "pregunta": "¿Qué es una empresa familiar?",
    "opciones": [
      "Aquella donde trabajan miembros de una misma familia",
      "Una empresa que se dedica a productos infantiles",
      "Una empresa sin fines de lucro",
      "Una empresa estatal"
    ]
  },
  {
    "pregunta": "¿Cuál es una ventaja de la tercerización en empresas?",
    "opciones": [
      "Mayor control interno",
      "Reducción de costos y especialización de tareas",
      "Menor productividad",
      "Aumento de personal fijo"
    ]
  },
  {
    "pregunta": "¿Qué implica la globalización para las empresas?",
    "opciones": [
      "Que deben trabajar solo con proveedores locales",
      "Que no pueden vender al extranjero",
      "Que se enfrentan a mercados internacionales y mayor competencia",
      "Que deben ser estatales"
    ]
  },
  {
    "pregunta": "¿Qué función tiene el área de marketing en una empresa?",
    "opciones": [
      "Contratar empleados",
      "Gestionar proveedores",
      "Promover y posicionar productos o servicios",
      "Fabricar los productos"
    ]
  },
  {
    "pregunta": "¿Qué tipo de empresa puede tener acciones que se compran en la bolsa de valores?",
    "opciones": [
      "Sociedad anónima",
      "Cooperativa",
      "Sociedad colectiva",
      "Empresa informal"
    ]
  },
  {
    "pregunta": "¿Qué área de la empresa se encarga de planificar y controlar la producción?",
    "opciones": [
      "Marketing",
      "Producción",
      "Contabilidad",
      "Logística"
    ]
  },
  {
    "pregunta": "¿Qué tipo de empresa está más vinculada al uso intensivo de mano de obra y poca tecnología?",
    "opciones": [
      "Industrial",
      "Informal",
      "Artesanal",
      "Mixta"
    ]
  },
  {
    "pregunta": "¿Cuál es una característica de las empresas exportadoras?",
    "opciones": [
      "Solo venden a nivel local",
      "Requieren autorización para operar en zonas rurales",
      "Venden productos o servicios al extranjero",
      "Solo trabajan con cooperativas"
    ]
  },
  {
    "pregunta": "¿Qué característica distingue a una sociedad colectiva?",
    "opciones": [
      "Tiene responsabilidad limitada",
      "Los socios responden con su patrimonio personal",
      "Solo opera en internet",
      "Requiere más de 50 empleados"
    ]
  },
  {
    "pregunta": "¿Qué empresas trabajan principalmente con información, innovación y conocimiento?",
    "opciones": [
      "Del sector secundario",
      "Del sector cuaternario",
      "Informales",
      "Comerciales"
    ]
  },
  {
    "pregunta": "¿Qué tipo de empresa suele trabajar con materias primas directamente extraídas de la naturaleza?",
    "opciones": [
      "Comercial",
      "Cuaternaria",
      "Primaria",
      "Industrial"
    ]
  },
  {
    "pregunta": "¿Qué es una empresa sin fines de lucro?",
    "opciones": [
      "Una empresa que busca maximizar ganancias",
      "Una organización que reinvierte todo para cumplir objetivos sociales",
      "Una sociedad anónima internacional",
      "Una empresa familiar"
    ]
  },
  {
    "pregunta": "¿Qué es una fusión empresarial?",
    "opciones": [
      "Un despido masivo",
      "La compra de materia prima",
      "La unión de dos o más empresas para formar una nueva",
      "La venta de acciones al público"
    ]
  },
  {
    "pregunta": "¿Cuál de las siguientes NO es una forma jurídica común de una empresa?",
    "opciones": [
      "Sociedad anónima",
      "Sociedad limitada",
      "Empresa invisible",
      "Empresa unipersonal"
    ]
  },
  {
    "pregunta": "¿Qué es una startup?",
    "opciones": [
      "Una empresa antigua y tradicional",
      "Una empresa nueva, innovadora y con potencial de crecimiento rápido",
      "Una empresa estatal",
      "Una cooperativa agraria"
    ]
  },
  {
    "pregunta": "¿Qué elemento es fundamental para que una empresa planifique sus objetivos?",
    "opciones": [
      "Dinero en efectivo",
      "Competencia desleal",
      "Misión y visión empresarial",
      "Más empleados"
    ]
  },
  {
    "pregunta": "¿Qué diferencia a una empresa formal de una informal?",
    "opciones": [
      "El tipo de productos que vende",
      "La cantidad de empleados",
      "El cumplimiento de requisitos legales",
      "Su ubicación geográfica"
    ]
  },
    {
    "pregunta": "¿Qué tipo de empresas suelen tener más dificultad para acceder a créditos bancarios?",
    "opciones": [
      "Multinacionales",
      "Empresas del Estado",
      "Microempresas",
      "Sociedades anónimas"
    ]
  },
  {
    "pregunta": "¿Cuál de las siguientes funciones pertenece al área logística de una empresa?",
    "opciones": [
      "Diseño de publicidad",
      "Control de transporte y almacenamiento de productos",
      "Selección de personal",
      "Planificación fiscal"
    ]
  },
  {
    "pregunta": "¿Qué sector incluye empresas como bancos, aseguradoras y financieras?",
    "opciones": [
      "Primario",
      "Secundario",
      "Financiero",
      "Cuaternario"
    ]
  },
  {
    "pregunta": "¿Qué significa que una empresa sea global?",
    "opciones": [
      "Opera solo en su país de origen",
      "Está limitada por leyes locales",
      "Tiene presencia en varios países y mercados",
      "Solo opera con productos digitales"
    ]
  },
  {
    "pregunta": "¿Cuál es el rol principal del área de administración en una empresa?",
    "opciones": [
      "Vender productos",
      "Organizar recursos para cumplir objetivos",
      "Transportar mercancías",
      "Diseñar productos"
    ]
  },
  {
    "pregunta": "¿Qué tipo de empresa se organiza como comunidad de productores y consumidores?",
    "opciones": [
      "Pública",
      "Privada",
      "Cooperativa",
      "Unipersonal"
    ]
  },
  {
    "pregunta": "¿Qué empresas están sujetas a normas impositivas y laborales?",
    "opciones": [
      "Solo las grandes",
      "Solo las extranjeras",
      "Las empresas formales",
      "Las empresas ilegales"
    ]
  },
  {
    "pregunta": "¿Qué permite el análisis FODA en una empresa?",
    "opciones": [
      "Diseñar el logotipo",
      "Evaluar fortalezas, oportunidades, debilidades y amenazas",
      "Contratar personal",
      "Comprar insumos al por mayor"
    ]
  },
  {
    "pregunta": "¿Cuál es el principal impacto de la economía de escala en una gran empresa?",
    "opciones": [
      "Aumenta los costos unitarios",
      "Reduce los precios y mejora la competitividad",
      "Reduce el control de calidad",
      "Disminuye la capacidad de producción"
    ]
  },
  {
    "pregunta": "¿Qué implica una estructura organizacional matricial?",
    "opciones": [
      "Una jerarquía rígida sin cruces de funciones",
      "Asignación de empleados a proyectos específicos bajo dos jefaturas",
      "Organización por zonas geográficas únicamente",
      "Separación absoluta entre administración y producción"
    ]
  },
  {
    "pregunta": "¿Qué función cumple el análisis del entorno PESTEL en una empresa?",
    "opciones": [
      "Determinar el precio de venta de un producto",
      "Analizar factores externos: políticos, económicos, sociales, tecnológicos, ecológicos y legales",
      "Seleccionar proveedores confiables",
      "Diseñar campañas publicitarias"
    ]
  },
  {
    "pregunta": "¿Cuál es el riesgo de depender excesivamente de un solo proveedor en una empresa industrial?",
    "opciones": [
      "Incremento de la diversificación",
      "Reducción de los costos operativos",
      "Vulnerabilidad ante fallas externas",
      "Mejor cumplimiento de plazos"
    ]
  },
  {
    "pregunta": "¿Qué indicador se utiliza comúnmente para medir la rentabilidad de una empresa?",
    "opciones": [
      "Liquidez corriente",
      "Retorno sobre el capital (ROE)",
      "Activo no corriente",
      "Rotación de inventarios"
    ]
  },
  {
    "pregunta": "¿Qué implica la diversificación empresarial horizontal?",
    "opciones": [
      "Ingresar a un nuevo sector no relacionado con su rubro principal",
      "Expandir el negocio ofreciendo productos complementarios o similares",
      "Aumentar la inversión en maquinaria pesada",
      "Reducir el número de productos"
    ]
  },
  {
    "pregunta": "¿Cuál es el objetivo principal de una auditoría interna en una empresa?",
    "opciones": [
      "Aumentar el stock de productos",
      "Evaluar el cumplimiento de procedimientos y detectar irregularidades",
      "Atraer nuevos inversores",
      "Analizar el diseño de productos"
    ]
  },
  {
    "pregunta": "¿Cuál de estos es un ejemplo de empresa oligopólica?",
    "opciones": [
      "Una única empresa que domina el mercado",
      "Varias empresas compitiendo libremente",
      "Un grupo reducido de empresas que domina un mercado específico",
      "Empresas familiares rurales"
    ]
  },
  {
    "pregunta": "¿Qué característica presenta una empresa que cotiza en bolsa?",
    "opciones": [
      "Sus acciones pueden ser compradas por el público en el mercado financiero",
      "Solo produce a gran escala",
      "Tiene únicamente capital privado",
      "Opera informalmente"
    ]
  },
  {
    "pregunta": "¿Cuál es el principal objetivo de una empresa en etapa de internacionalización?",
    "opciones": [
      "Reducir su tamaño",
      "Diversificar riesgos y ampliar su mercado",
      "Reducir costos de personal",
      "Depender de subsidios estatales"
    ]
  },
  {
    "pregunta": "¿Qué se busca al implementar un sistema ERP en una empresa?",
    "opciones": [
      "Incentivar el trabajo informal",
      "Integrar la gestión de todas las áreas en un solo sistema",
      "Reducir la cantidad de trabajadores",
      "Evitar pagar impuestos"
    ]
  },
  {
    "pregunta": "¿Cuál es una ventaja competitiva sostenible en una empresa?",
    "opciones": [
      "Un descuento temporal",
      "Un precio bajo ocasional",
      "Una innovación difícil de imitar por otras empresas",
      "Una campaña publicitaria agresiva"
    ]
  },
  {
    "pregunta": "¿Qué implica una estrategia de liderazgo en costos?",
    "opciones": [
      "Incrementar el precio de venta",
      "Reducir costos para ofrecer precios más bajos que la competencia",
      "Invertir más en recursos humanos",
      "Ampliar la estructura jerárquica"
    ]
  },
  {
    "pregunta": "¿Cuál es el beneficio principal de una empresa certificada como B (de triple impacto)?",
    "opciones": [
      "Reduce impuestos automáticamente",
      "Demuestra compromiso social, económico y ambiental",
      "Solo exporta sus productos",
      "Opera exclusivamente sin fines de lucro"
    ]
  },
  {
    "pregunta": "¿Qué problema puede causar una alta rotación de personal en una empresa?",
    "opciones": [
      "Aumento de la innovación",
      "Mayor estabilidad operativa",
      "Costos de capacitación elevados y pérdida de conocimiento",
      "Mayor flexibilidad organizacional"
    ]
  },
  {
    "pregunta": "¿Qué representa el índice de liquidez corriente?",
    "opciones": [
      "La ganancia total de la empresa",
      "La relación entre activos corrientes y pasivos corrientes",
      "El nivel de endeudamiento total",
      "La cantidad de ventas anuales"
    ]
  },
  {
    "pregunta": "¿Qué es una ventaja de una empresa familiar bien estructurada?",
    "opciones": [
      "Mayor informalidad",
      "Confianza interna y toma de decisiones ágil",
      "Dificultad para delegar",
      "Poca identificación de los empleados"
    ]
  },
  {
    "pregunta": "¿Qué puede generar un entorno macroeconómico inestable en las empresas locales?",
    "opciones": [
      "Mayor inversión extranjera inmediata",
      "Previsibilidad en los precios",
      "Dificultad para planificar a largo plazo",
      "Estabilidad en el tipo de cambio"
    ]
  },
  {
    "pregunta": "¿Qué es la cultura organizacional de una empresa?",
    "opciones": [
      "El tipo de producto que vende",
      "Las normas, valores y formas de comportamiento compartidas por sus miembros",
      "La cantidad de trabajadores",
      "El nivel de ventas"
    ]
  },
  {
    "pregunta": "¿Cuál es el riesgo de una integración vertical inversa?",
    "opciones": [
      "Pérdida de clientes",
      "Complejidad en la gestión de insumos y materias primas",
      "Reducción del control logístico",
      "Mayor dependencia del Estado"
    ]
  },
  
  
];