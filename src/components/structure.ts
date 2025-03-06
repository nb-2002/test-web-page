export interface Box{
    id:number;
    x:number;
    y:number;
    n:number;
    color:string;
}

export interface BoxColorType {
    [key: number]: string;
}

export const BoxColor: BoxColorType = {
    0: "#BAAD9A",
    2: "#EEE4DB",
    4: "#EDE0C8",
    8: "#F2B179",
    16: "#F59563",
    32: "#F67C5F",
    64: "#F76E30",
    128: "#F9D86E",
    256: "#F9D86E",
    512: "#E6D86E",
    1024: "#EDC22E",
    2048: "#EDC22E",
    4096: "#EDC22E",
    8192: "#EDC22E",
    16384: "#EDC22E",
    32768: "#EDC22E",
    65536: "#EDC22E",
}