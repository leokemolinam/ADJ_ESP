// Mock data para el proceso de adjudicación de tierras ANT
export const procesoAdjudicacion = {
  titulo: "Proceso de Adjudicación Especiales – ANT",
  macroprocesos: [
    {
      id: 1,
      titulo: "Alistamiento y Gestión Inicial",
      descripcion: "Inicio del proceso con documentación base y verificaciones preliminares",
      icono: "FileText",
      color: "#059669", // Verde ANT
      duracionEstimada: "2-4 semanas",
      actividades: [
        {
          id: "1.1",
          nombre: "Acta de entrega provisional",
          descripcion: "Documento disparador del proceso de adjudicación",
          tipo: "disparador",
          responsable: "Equipo Jurídico",
          documentos: ["Acta de entrega provisional"],
          estado: "pendiente"
        },
        {
          id: "1.2",
          nombre: "Verificación escritura de compra",
          descripcion: "Validación de área y documentos de propiedad",
          tipo: "verificacion",
          responsable: "Equipo Técnico",
          documentos: ["Escritura de compra", "Certificado de tradición"],
          estado: "pendiente"
        },
        {
          id: "1.3",
          nombre: "Ruta jurídica por diferencias de cabida",
          descripcion: "Proceso aplicable cuando hay discrepancias en el área",
          tipo: "condicional",
          responsable: "Equipo Jurídico",
          documentos: ["Informe técnico de medición"],
          estado: "pendiente"
        },
        {
          id: "1.4",
          nombre: "Gestión catastral inicial",
          descripcion: "Trámites ante autoridades catastrales",
          tipo: "gestion",
          responsable: "Equipo Catastral",
          documentos: ["Certificado catastral"],
          estado: "pendiente"
        },
        {
          id: "1.5",
          nombre: "Inscripción predio a nombre de ANT en ORIP",
          descripcion: "Registro de la propiedad en la Oficina de Registro",
          tipo: "registro",
          responsable: "Equipo Jurídico",
          documentos: ["Folio de matrícula inmobiliaria"],
          estado: "pendiente"
        },
        {
          id: "1.6",
          nombre: "Registro en el Fondo de Tierras",
          descripcion: "Cumplimiento del Decreto 902 de 2017",
          tipo: "registro",
          responsable: "Equipo Administrativo",
          documentos: ["Registro Fondo de Tierras"],
          estado: "pendiente"
        }
      ]
    },
    {
      id: 2,
      titulo: "Definición Técnica y Comunitaria",
      descripcion: "Cálculos técnicos y validación comunitaria de beneficiarios",
      icono: "Users",
      color: "#0D9488", // Verde más oscuro
      duracionEstimada: "4-6 semanas",
      actividades: [
        {
          id: "2.1",
          nombre: "Cálculo de UAF",
          descripcion: "Basado en Ley 160 de 1994 y acuerdos vigentes",
          tipo: "calculo",
          responsable: "Equipo Técnico",
          documentos: ["Informe UAF", "Acuerdos vigentes"],
          estado: "pendiente"
        },
        {
          id: "2.2",
          nombre: "Cálculo de área útil",
          descripcion: "Exclusión de rondas hídricas, áreas de conservación y cuerpos de agua",
          tipo: "calculo",
          responsable: "Equipo Técnico",
          documentos: ["Plano de área útil", "Estudio ambiental"],
          estado: "pendiente"
        },
        {
          id: "2.3",
          nombre: "Postulación de la organización",
          descripcion: "Generación del listado de beneficiarios (RESO)",
          tipo: "postulacion",
          responsable: "Equipo Social",
          documentos: ["Listado RESO", "Acta de postulación"],
          estado: "pendiente"
        },
        {
          id: "2.4",
          nombre: "Validación de documentación",
          descripcion: "Verificación de identidad, SISBEN y certificaciones",
          tipo: "validacion",
          responsable: "Equipo Social",
          documentos: ["Cédulas", "Certificado SISBEN", "Certificaciones"],
          estado: "pendiente"
        },
        {
          id: "2.5",
          nombre: "Reuniones comunitarias - Ajuste de familias",
          descripcion: "Definición del número de familias y parcelas",
          tipo: "reunion",
          responsable: "Equipo Social",
          documentos: ["Acta de reunión", "Listado definitivo"],
          estado: "pendiente"
        },
        {
          id: "2.6",
          nombre: "Reuniones comunitarias - Criterios de priorización",
          descripcion: "Establecimiento de criterios para la asignación",
          tipo: "reunion",
          responsable: "Equipo Social",
          documentos: ["Criterios de priorización", "Acta de acuerdo"],
          estado: "pendiente"
        },
        {
          id: "2.7",
          nombre: "Identificación de necesidades productivas",
          descripcion: "Caracterización de vocación y necesidades del territorio",
          tipo: "caracterizacion",
          responsable: "Equipo Técnico",
          documentos: ["Estudio de vocación", "Plan productivo"],
          estado: "pendiente"
        }
      ]
    },
    {
      id: 3,
      titulo: "Parcelación y Construcción Colectiva",
      descripcion: "Diseño participativo y delimitación técnica del territorio",
      icono: "Map",
      color: "#EAB308", // Amarillo ANT
      duracionEstimada: "6-8 semanas",
      actividades: [
        {
          id: "3.1",
          nombre: "Propuesta inicial de parcelación",
          descripcion: "Diseño técnico preliminar del equipo especializado",
          tipo: "propuesta",
          responsable: "Equipo Técnico",
          documentos: ["Plano preliminar", "Memoria técnica"],
          estado: "pendiente"
        },
        {
          id: "3.2",
          nombre: "Rediseño participativo con comunidad",
          descripcion: "Ajustes de la parcelación con participación comunitaria",
          tipo: "participativo",
          responsable: "Equipo Técnico + Social",
          documentos: ["Plano ajustado", "Acta participativa"],
          estado: "pendiente"
        },
        {
          id: "3.3",
          nombre: "Socialización oficial en asamblea",
          descripcion: "Presentación formal de la propuesta de parcelación",
          tipo: "socializacion",
          responsable: "Equipo Social",
          documentos: ["Acta de asamblea", "Registro de asistencia"],
          estado: "pendiente"
        },
        {
          id: "3.4",
          nombre: "Aprobación de parcelación",
          descripcion: "Validación jurídica, comunitaria y técnica",
          tipo: "aprobacion",
          responsable: "Jurídico + Comunidad + Técnico",
          documentos: ["Acta de aprobación", "Concepto técnico"],
          estado: "pendiente"
        },
        {
          id: "3.5",
          nombre: "Replanteo topográfico",
          descripcion: "Delimitación física en campo de las parcelas",
          tipo: "topografia",
          responsable: "Equipo Topográfico",
          documentos: ["Levantamiento topográfico", "Coordenadas"],
          estado: "pendiente"
        },
        {
          id: "3.6",
          nombre: "Generación de planos y linderos",
          descripcion: "Elaboración de RTL (Redacción Técnica de Linderos)",
          tipo: "documentacion",
          responsable: "Equipo Técnico",
          documentos: ["Planos definitivos", "RTL", "Linderos"],
          estado: "pendiente"
        }
      ]
    },
    {
      id: 4,
      titulo: "Trámite Jurídico y Resolución",
      descripcion: "Formalización jurídica y emisión de actos administrativos",
      icono: "Scale",
      color: "#059669", // Verde ANT
      duracionEstimada: "4-6 semanas",
      actividades: [
        {
          id: "4.1",
          nombre: "Auto de apertura del proceso",
          descripcion: "Acto administrativo que inicia formalmente la adjudicación",
          tipo: "auto",
          responsable: "Equipo Jurídico",
          documentos: ["Auto de apertura"],
          estado: "pendiente"
        },
        {
          id: "4.2",
          nombre: "Validación Fondo de Tierras y estado tributario",
          descripcion: "Verificación de requisitos fiscales y administrativos",
          tipo: "validacion",
          responsable: "Equipo Jurídico",
          documentos: ["Certificado tributario", "Estado Fondo"],
          estado: "pendiente"
        },
        {
          id: "4.3",
          nombre: "Conformación de expedientes en Orfeo",
          descripcion: "Creación de expedientes individuales por beneficiario",
          tipo: "expediente",
          responsable: "Equipo Administrativo",
          documentos: ["Expedientes Orfeo"],
          estado: "pendiente"
        },
        {
          id: "4.4",
          nombre: "Elaboración de Resolución de Adjudicación",
          descripcion: "Redacción del acto administrativo definitivo",
          tipo: "resolucion",
          responsable: "Equipo Jurídico",
          documentos: ["Resolución de Adjudicación"],
          estado: "pendiente"
        },
        {
          id: "4.5",
          nombre: "Notificación a beneficiarios",
          descripcion: "Comunicación oficial y constancia de ejecutoria",
          tipo: "notificacion",
          responsable: "Equipo Jurídico",
          documentos: ["Constancia de notificación", "Ejecutoria"],
          estado: "pendiente"
        }
      ]
    },
    {
      id: 5,
      titulo: "Registro y Cierre",
      descripcion: "Inscripción registral y entrega final de títulos",
      icono: "Award",
      color: "#0D9488", // Verde más oscuro
      duracionEstimada: "3-4 semanas",
      actividades: [
        {
          id: "5.1",
          nombre: "Oficio a ORIP para inscripción",
          descripcion: "Cumplimiento de la Ley 1579 de 2012",
          tipo: "oficio",
          responsable: "Equipo Jurídico",
          documentos: ["Oficio ORIP", "Resoluciones"],
          estado: "pendiente"
        },
        {
          id: "5.2",
          nombre: "Registro en folio de matrícula inmobiliaria",
          descripcion: "Inscripción oficial de las resoluciones",
          tipo: "registro",
          responsable: "ORIP",
          documentos: ["Folio actualizado", "Certificado de inscripción"],
          estado: "pendiente"
        },
        {
          id: "5.3",
          nombre: "Cierre de expediente",
          descripcion: "Finalización administrativa del proceso",
          tipo: "cierre",
          responsable: "Equipo Administrativo",
          documentos: ["Acta de cierre"],
          estado: "pendiente"
        },
        {
          id: "5.4",
          nombre: "Entrega de títulos a familias",
          descripcion: "Acto ceremonial de entrega a beneficiarios",
          tipo: "entrega",
          responsable: "Dirección ANT",
          documentos: ["Títulos de propiedad", "Acta de entrega"],
          estado: "pendiente"
        }
      ]
    }
  ]
};

export const estadosActividad = {
  pendiente: { label: "Pendiente", color: "#6B7280", bgColor: "#F3F4F6" },
  en_proceso: { label: "En Proceso", color: "#EAB308", bgColor: "#FEF3C7" },
  completado: { label: "Completado", color: "#059669", bgColor: "#D1FAE5" },
  bloqueado: { label: "Bloqueado", color: "#DC2626", bgColor: "#FEE2E2" }
};

export const tiposActividad = {
  disparador: { label: "Disparador", icon: "Zap" },
  verificacion: { label: "Verificación", icon: "CheckCircle" },
  condicional: { label: "Condicional", icon: "AlertTriangle" },
  gestion: { label: "Gestión", icon: "Settings" },
  registro: { label: "Registro", icon: "FileText" },
  calculo: { label: "Cálculo", icon: "Calculator" },
  postulacion: { label: "Postulación", icon: "UserPlus" },
  validacion: { label: "Validación", icon: "Shield" },
  reunion: { label: "Reunión", icon: "Users" },
  caracterizacion: { label: "Caracterización", icon: "Search" },
  propuesta: { label: "Propuesta", icon: "Lightbulb" },
  participativo: { label: "Participativo", icon: "UsersRound" },
  socializacion: { label: "Socialización", icon: "MessageSquare" },
  aprobacion: { label: "Aprobación", icon: "ThumbsUp" },
  topografia: { label: "Topografía", icon: "Map" },
  documentacion: { label: "Documentación", icon: "FolderOpen" },
  auto: { label: "Auto", icon: "Gavel" },
  expediente: { label: "Expediente", icon: "Archive" },
  resolucion: { label: "Resolución", icon: "Scale" },
  notificacion: { label: "Notificación", icon: "Bell" },
  oficio: { label: "Oficio", icon: "Mail" },
  cierre: { label: "Cierre", icon: "CheckSquare" },
  entrega: { label: "Entrega", icon: "Award" }
};