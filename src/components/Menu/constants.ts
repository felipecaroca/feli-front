import { ORGANIZATION_URL, WAITINGLINE_URL } from "@/commons";
import { MenuSectionType } from "./types";

export const sections: MenuSectionType[] = [
  {
    value: 'ORGANIZATION',
    title: 'Organización',
    items: [
      { id: 'ORGANIZATION-NEW', name: 'Nueva Organización', onClick:`${ORGANIZATION_URL}/create`},
      { id: 'ORGANIZATION-CREATE', name: 'Ver Organizaciones', onClick: ORGANIZATION_URL},
    ],
  },
  {
    value: 'WAITTINGLINE',
    title: 'Atención a clientes',
    items: [      
      {
        id: 'WAITTINGLINE-MODULES',
        name: 'Módulos de atención',
        onClick: `${WAITINGLINE_URL}/modules`,
      },
      { id: 'WAITTINGLINE-ATTEND', name: 'Atender clientes', onClick: `${WAITINGLINE_URL}/attend` },
      { id: 'WAITTINGLINE-QR', name: 'Código QR', onClick: `${WAITINGLINE_URL}/qr` },
      {
        id: 'WAITTINGLINE-ATTENTION-VIEW',
        name: 'Sala de espera',
        onClick: `${WAITINGLINE_URL}/attention-view`,
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