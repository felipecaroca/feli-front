import { ORGANIZATION_URL, WAITINGLINE_URL } from "@/commons";
import { MenuSectionType } from "./types";

export const sections: MenuSectionType[] = [
  {
    value: 'A',
    title: 'Organización',
    items: [
      { id: 'A-ORGANIZATION', name: 'Nueva Organización', onClick:`${ORGANIZATION_URL}/create`},
      { id: 'A-CREATE-ORG', name: 'Ver Organizaciones', onClick: ORGANIZATION_URL}
    ],
  },
  {
    value: 'B',
    title: 'Atención a clientes',
    items: [
      { id: 'B-SELECT-ORG', name: 'Seleccionar organización', onClick: `${WAITINGLINE_URL}` },
      {
        id: 'B-MODULES',
        name: 'Módulos de atención',
        onClick: `${WAITINGLINE_URL}/{org}/modules`,
      },
      { id: 'B-ATTEND', name: 'Atender clientes', onClick: `${WAITINGLINE_URL}/{org}/attend` },
      { id: 'B-QR', name: 'Código QR', onClick: `${WAITINGLINE_URL}/{org}/qr` },
      {
        id: 'B-ATTENTION-VIEW',
        name: 'Sala de espera',
        onClick: `${WAITINGLINE_URL}/{org}/attention-view`,
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