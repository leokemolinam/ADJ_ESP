import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  ChevronDown, 
  ChevronRight, 
  Clock, 
  Download, 
  Printer,
  FileText,
  Users,
  Map,
  Scale,
  Award,
  Zap,
  CheckCircle,
  AlertTriangle,
  Settings,
  Calculator,
  UserPlus,
  Shield,
  Search,
  Lightbulb,
  UsersRound,
  MessageSquare,
  ThumbsUp,
  FolderOpen,
  Gavel,
  Archive,
  Bell,
  Mail,
  CheckSquare
} from 'lucide-react';
import { procesoAdjudicacion, estadosActividad, tiposActividad } from '../data/mock';

const iconComponents = {
  FileText, Users, Map, Scale, Award, Zap, CheckCircle, AlertTriangle,
  Settings, Calculator, UserPlus, Shield, Search, Lightbulb,
  UsersRound, MessageSquare, ThumbsUp, FolderOpen, Gavel,
  Archive, Bell, Mail, CheckSquare
};

const TimelineProcess = () => {
  const [expandedMacroproceso, setExpandedMacroproceso] = useState(null);
  const [selectedActividad, setSelectedActividad] = useState(null);
  const printRef = useRef();

  const handleMacroprocesoClick = (id) => {
    setExpandedMacroproceso(expandedMacroproceso === id ? null : id);
    setSelectedActividad(null);
  };

  const handleActividadClick = (actividad) => {
    setSelectedActividad(actividad);
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(procesoAdjudicacion, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'proceso-adjudicacion-ant.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handlePrint = () => {
    window.print();
  };

  const getIcon = (iconName) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : <FileText className="w-5 h-5" />;
  };

  const getActivityIcon = (tipo) => {
    const IconComponent = iconComponents[tiposActividad[tipo]?.icon];
    return IconComponent ? <IconComponent className="w-4 h-4" /> : <Settings className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Header */}
      <div className="bg-white border-b border-green-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {procesoAdjudicacion.titulo}
                </h1>
                <p className="text-gray-600 mt-1">
                  Timeline interactivo del proceso de adjudicación
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={handleExport}
                variant="outline" 
                className="flex items-center gap-2 border-green-200 hover:bg-green-50"
              >
                <Download className="w-4 h-4" />
                Exportar
              </Button>
              <Button 
                onClick={handlePrint}
                variant="outline" 
                className="flex items-center gap-2 border-green-200 hover:bg-green-50"
              >
                <Printer className="w-4 h-4" />
                Imprimir
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline Principal */}
          <div className="lg:col-span-2 space-y-6" ref={printRef}>
            {procesoAdjudicacion.macroprocesos.map((macroproceso, index) => {
              const isExpanded = expandedMacroproceso === macroproceso.id;
              const isCompleted = false; // Mock - En el backend se calcularía
              
              return (
                <div key={macroproceso.id} className="relative">
                  {/* Línea conectora vertical */}
                  {index < procesoAdjudicacion.macroprocesos.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-green-300 to-yellow-300 z-0" />
                  )}
                  
                  {/* Card del Macroproceso */}
                  <Card 
                    className={`relative z-10 cursor-pointer transition-all duration-300 hover:shadow-lg border-l-4 ${
                      isExpanded 
                        ? 'shadow-lg border-l-green-500 bg-white' 
                        : 'hover:shadow-md border-l-gray-300'
                    }`}
                    onClick={() => handleMacroprocesoClick(macroproceso.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          {/* Indicador circular */}
                          <div 
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                              isCompleted 
                                ? 'bg-green-600' 
                                : isExpanded 
                                  ? 'bg-yellow-500' 
                                  : 'bg-gray-400'
                            }`}
                            style={{ backgroundColor: isExpanded ? macroproceso.color : undefined }}
                          >
                            {getIcon(macroproceso.icono)}
                          </div>
                          
                          <div className="flex-1">
                            <CardTitle className="text-lg text-gray-900 mb-1">
                              {macroproceso.titulo}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-600">
                              {macroproceso.descripcion}
                            </CardDescription>
                            <div className="flex items-center gap-4 mt-2">
                              <Badge variant="secondary" className="text-xs">
                                <Clock className="w-3 h-3 mr-1" />
                                {macroproceso.duracionEstimada}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {macroproceso.actividades.length} actividades
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-gray-500 hover:text-gray-700"
                        >
                          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </Button>
                      </div>
                    </CardHeader>
                    
                    {/* Actividades expandibles */}
                    {isExpanded && (
                      <CardContent className="pt-0">
                        <div className="space-y-3 border-t pt-4">
                          {macroproceso.actividades.map((actividad, actIndex) => (
                            <div 
                              key={actividad.id}
                              className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-sm ${
                                selectedActividad?.id === actividad.id 
                                  ? 'bg-green-50 border-green-200' 
                                  : 'bg-gray-50 border-gray-200 hover:bg-white'
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleActividadClick(actividad);
                              }}
                            >
                              <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                  <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                                    {getActivityIcon(actividad.tipo)}
                                  </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-start justify-between gap-2">
                                    <h4 className="font-medium text-gray-900 text-sm leading-tight">
                                      {actividad.nombre}
                                    </h4>
                                    <Badge 
                                      variant="secondary" 
                                      className="text-xs flex-shrink-0"
                                      style={{ 
                                        backgroundColor: estadosActividad[actividad.estado]?.bgColor,
                                        color: estadosActividad[actividad.estado]?.color 
                                      }}
                                    >
                                      {estadosActividad[actividad.estado]?.label}
                                    </Badge>
                                  </div>
                                  <p className="text-xs text-gray-600 mt-1">
                                    {actividad.descripcion}
                                  </p>
                                  <div className="flex items-center gap-2 mt-2">
                                    <Badge variant="outline" className="text-xs">
                                      {tiposActividad[actividad.tipo]?.label}
                                    </Badge>
                                    <span className="text-xs text-gray-500">
                                      {actividad.responsable}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Panel de Detalles */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              {selectedActividad ? (
                <Card className="border-green-200">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-yellow-50">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-green-200 flex items-center justify-center">
                        {getActivityIcon(selectedActividad.tipo)}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-gray-900">
                          {selectedActividad.nombre}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          ID: {selectedActividad.id}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Descripción</h4>
                      <p className="text-sm text-gray-600">
                        {selectedActividad.descripcion}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Responsable</h4>
                      <Badge variant="outline">
                        {selectedActividad.responsable}
                      </Badge>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Tipo de Actividad</h4>
                      <Badge 
                        variant="secondary"
                        className="flex items-center gap-1 w-fit"
                      >
                        {getActivityIcon(selectedActividad.tipo)}
                        {tiposActividad[selectedActividad.tipo]?.label}
                      </Badge>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Estado</h4>
                      <Badge 
                        style={{ 
                          backgroundColor: estadosActividad[selectedActividad.estado]?.bgColor,
                          color: estadosActividad[selectedActividad.estado]?.color 
                        }}
                      >
                        {estadosActividad[selectedActividad.estado]?.label}
                      </Badge>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Documentos</h4>
                      <div className="space-y-1">
                        {selectedActividad.documentos.map((doc, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <FileText className="w-3 h-3" />
                            {doc}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-gray-200">
                  <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <FileText className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      Selecciona una actividad
                    </h3>
                    <p className="text-sm text-gray-600">
                      Haz clic en cualquier actividad del timeline para ver sus detalles completos
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineProcess;