import { MenuSectionType } from "./types";

export const sections: MenuSectionType[] = [
  {
    value: 'A',
    title: 'Organización',
    items: [{ id: 'A-NEXT', name: 'Proximamente...', onClick: '/' }],
  },
  {
    value: 'B',
    title: 'Atención a clientes',
    items: [
      { id: 'B-SELECT-ORG', name: 'Seleccionar organización', onClick: '/' },
      {
        id: 'B-MODULES',
        name: 'Módulos de atención',
        onClick: '/{org}/modules',
      },
      { id: 'B-ATTEND', name: 'Atender clientes', onClick: '/{org}/attend' },
      { id: 'B-QR', name: 'Código QR', onClick: '/{org}/qr' },
      {
        id: 'B-ATTENTION-VIEW',
        name: 'Sala de espera',
        onClick: '/{org}/attention-view',
      },
    ],
  },
  {
    value: 'C',
    title: 'Productos',
    items: [{ id: 'C-NEXT', name: 'Proximamente...', onClick: '/' }],
  },
  {
    value: 'D',
    title: 'Finanzas',
    items: [{ id: 'D-NEXT', name: 'Proximamente...', onClick: '/' }],
  },
  {
    value: 'E',
    title: 'Chat',
    items: [{ id: 'E-NEXT', name: 'Proximamente...', onClick: '/' }],
  },
  {
    value: 'F',
    title: 'Feedback',
    items: [{ id: 'F-NEXT', name: 'Proximamente...', onClick: '/' }],
  },
]