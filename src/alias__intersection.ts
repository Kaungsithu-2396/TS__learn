type Animal = {
    name: string;
    place: string;
};
type mamals = Animal & {
    preferFood: string;
};
const elephant: mamals = {
    name: "MO MO",
    place: "Myanmar",
    preferFood: "Banana",
};
