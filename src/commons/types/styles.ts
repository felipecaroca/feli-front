export type SinglePixel = `${`${`${number}px` | '0'}` | '0'}`;
export type DoublePixel = `${`${number}px` | '0'} ${`${number}px` | '0'}`;
export type TriplePixel = `${`${number}px` | '0'} ${`${number}px` | '0'} ${`${number}px` | '0'}`;
export type QuadPixel = `${`${number}px` | '0'} ${`${number}px` | '0'} ${`${number}px` | '0'} ${`${number}px` | '0'}`;

export type PixelOrPercent = `${`${`${number}${'px'|'%'}` | '0'}`}`;

export type PaddingPixels = SinglePixel | DoublePixel | TriplePixel | QuadPixel;

export type VariantsType = 'default' | 'success' | 'info' | 'danger' | 'warning'

export type PositionType = 'absolute' | 'relative' | 'fixed'