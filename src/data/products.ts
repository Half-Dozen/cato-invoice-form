export type InvoiceItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  type: string;
  quantity: number;
  total: number;
  vendorID: number; // Add the vendorID field
};

type ProductData = {
  Id: number;
  FullyQualifiedName: string;
  Description?: string;
  UnitPrice: number;
  Type: string;
};

const jsonData: ProductData[] = [
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Bandages Compression/Support",
    "Id": 1010001011,
    "UnitPrice": 87.96,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Bandages Compression/Support Crepe",
    "Id": 1010000760,
    "UnitPrice": 17.98,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Bandages Medicated",
    "Id": 1010000801,
    "UnitPrice": 51.47,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Bandages Self-Adherent",
    "Id": 1010001012,
    "UnitPrice": 64.1,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Bandages/Dressings Adhesive",
    "Id": 1010000992,
    "UnitPrice": 24.04,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Burn",
    "Id": 1010000984,
    "UnitPrice": 26.64,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Cavity Wound",
    "Id": 1010001318,
    "UnitPrice": 16.24,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Impregnated Antimicrobial",
    "Id": 1010000975,
    "UnitPrice": 79.76,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Impregnated Antimicrobial Iodine",
    "Id": 1010000763,
    "UnitPrice": 21.6,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Impregnated Antimicrobial Silver",
    "Id": 1010000709,
    "UnitPrice": 95.46,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Impregnated Antimicrobial Zinc Oxide",
    "Id": 1010000737,
    "UnitPrice": 23.24,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Impregnated Charcoal",
    "Id": 1010000730,
    "UnitPrice": 65.99,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Impregnated Hydrogel",
    "Id": 1010000814,
    "UnitPrice": 29.03,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Impregnated Saline",
    "Id": 1010000729,
    "UnitPrice": 45.69,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Natural Fiber Cotton/Gauze Petrolatum",
    "Id": 1010000708,
    "UnitPrice": 87.61,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonadherent",
    "Id": 1010001019,
    "UnitPrice": 94.55,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated",
    "Id": 1010000743,
    "UnitPrice": 54.29,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Biological",
    "Id": 1010000700,
    "UnitPrice": 54.34,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Biological Acellular Matrix",
    "Id": 1010000781,
    "UnitPrice": 67.01,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Biological Collagen",
    "Id": 1010000771,
    "UnitPrice": 39.59,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Combined Alginate/Collagen",
    "Id": 1010000757,
    "UnitPrice": 90.71,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Combined Cellulose/Cotton",
    "Id": 1010000912,
    "UnitPrice": 26.31,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Combined Composite",
    "Id": 1010000744,
    "UnitPrice": 41.11,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Combined Composite Superabsorbent",
    "Id": 1010000855,
    "UnitPrice": 94.45,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Natural Fiber",
    "Id": 1010000756,
    "UnitPrice": 33.24,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Natural Fiber Alginate",
    "Id": 1010000699,
    "UnitPrice": 51.32,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Natural Fiber Cotton/Gauze",
    "Id": 1010000710,
    "UnitPrice": 98.2,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Synthetic",
    "Id": 1010000782,
    "UnitPrice": 31.61,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Synthetic Fabric/Gauze",
    "Id": 1010000783,
    "UnitPrice": 16.83,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Synthetic Film",
    "Id": 1010001321,
    "UnitPrice": 35.19,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Synthetic Foam",
    "Id": 1010001018,
    "UnitPrice": 97.26,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Synthetic Hyaluronic Acid",
    "Id": 1010000791,
    "UnitPrice": 67.68,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Synthetic Hydrocolloid",
    "Id": 1010000764,
    "UnitPrice": 21.52,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Synthetic Hydrofiber",
    "Id": 1010000772,
    "UnitPrice": 23.67,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Synthetic Hydrogel",
    "Id": 1010000765,
    "UnitPrice": 22.49,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings Nonimpregnated Synthetic Silicone",
    "Id": 1010000784,
    "UnitPrice": 26.37,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Dressings, Natural Fiber, Cotton/Gauze, Antimicrobial, Bismuth Tribromophenate",
    "Id": 1010000762,
    "UnitPrice": 93.39,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Advanced Wound Care Dressings:Wound Packing Strips",
    "Id": 1010000818,
    "UnitPrice": 84.76,
    "Type": "Service",
    "Description": "Sale of advanced wound care dressing products."
  },
  {
    "FullyQualifiedName": "Ankle - Orthopedic Joint:Prostheses Joint Ankle",
    "Id": 1010001208,
    "UnitPrice": 55.24,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Ankle - Orthopedic Joint:Prostheses Joint Ankle Talar Component",
    "Id": 1010001204,
    "UnitPrice": 67.78,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Ankle - Orthopedic Joint:Prostheses Joint Ankle Tibial Component",
    "Id": 1010001194,
    "UnitPrice": 24.55,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Automated External Defibrillators (AEDs)",
    "Id": 1010000013,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Absorption Pads Eye Secretion",
    "Id": 1010001051,
    "UnitPrice": 14.07,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Bandages Elastic",
    "Id": 1010000993,
    "UnitPrice": 24.04,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Bandages Liquid",
    "Id": 1010000786,
    "UnitPrice": 20.86,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Bandages Plain Gauze",
    "Id": 1010000994,
    "UnitPrice": 15.23,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Bandages Retention",
    "Id": 1010000739,
    "UnitPrice": 35.07,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Bandages Retention Non-Elastic Cotton/Gauze",
    "Id": 1010000745,
    "UnitPrice": 25.93,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Bandages Tubular",
    "Id": 1010001013,
    "UnitPrice": 73.73,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Cotton Rolls",
    "Id": 1010001059,
    "UnitPrice": 12.83,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Dressing Pads",
    "Id": 1010001036,
    "UnitPrice": 90.53,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Dressings Occlusive",
    "Id": 1010001135,
    "UnitPrice": 11.49,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Dressings Roller Gauze",
    "Id": 1010001044,
    "UnitPrice": 63.81,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Gauze",
    "Id": 1010001045,
    "UnitPrice": 44.98,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Gel Scar/Keloid Inhibition Silicone",
    "Id": 1010000714,
    "UnitPrice": 82.95,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Sponges Germicidal",
    "Id": 1010001030,
    "UnitPrice": 24.51,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Sponges Multipurpose",
    "Id": 1010000807,
    "UnitPrice": 58.34,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Sponges Multipurpose Gauze",
    "Id": 1010001101,
    "UnitPrice": 36.08,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Sponges Rayon Cellulose",
    "Id": 1010001102,
    "UnitPrice": 93.67,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Stockinettes",
    "Id": 1010001095,
    "UnitPrice": 88.43,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Stockinettes Cast Padding",
    "Id": 1010000973,
    "UnitPrice": 84.92,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Tapes Adhesive",
    "Id": 1010001001,
    "UnitPrice": 43.71,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Tapes Adhesive Cloth",
    "Id": 1010000802,
    "UnitPrice": 28.57,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Tapes Adhesive Cloth Hypoallergenic",
    "Id": 1010000793,
    "UnitPrice": 42.78,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Tapes Adhesive General-Purpose",
    "Id": 1010001220,
    "UnitPrice": 42.42,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Tapes Adhesive Hypoallergenic",
    "Id": 1010001002,
    "UnitPrice": 95.56,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Basic Wound Care Dressings:Tapes Umbilical",
    "Id": 1010001106,
    "UnitPrice": 37.08,
    "Type": "Service",
    "Description": "Sale of basic wound care dressing products."
  },
  {
    "FullyQualifiedName": "Bone Replacement Products",
    "Id": 1010000143,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Bone Replacement Products:Bone Graft Substitutes Cell-based",
    "Id": 1010000870,
    "UnitPrice": 99.1,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Bone Replacement Products:Bone Graft Substitutes Non-Cell-Based",
    "Id": 1010000907,
    "UnitPrice": 63.61,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Bone Replacement Products:Bone Matrix Implants",
    "Id": 1010001326,
    "UnitPrice": 73.33,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Bone Replacement Products:Bone Matrix Implants Artificial",
    "Id": 1010001270,
    "UnitPrice": 67.82,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Bone Replacement Products:Bone Matrix Implants Biological",
    "Id": 1010001328,
    "UnitPrice": 12.39,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Bone Replacement Products:Foot Implants Subtarsal",
    "Id": 1010000738,
    "UnitPrice": 13.68,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Bone Replacement Products:Grafts Bone",
    "Id": 1010001038,
    "UnitPrice": 82.2,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Bone Replacement Products:Grafts Bone Synthetic",
    "Id": 1010001255,
    "UnitPrice": 97.83,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Breast Reconstruction",
    "Id": 1010000144,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Breast Reconstruction:Breast Implants Gel-Filled",
    "Id": 1010001363,
    "UnitPrice": 94.73,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Breast Reconstruction:Prostheses Mammary",
    "Id": 1010001073,
    "UnitPrice": 78.47,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Breast Reconstruction:Prostheses Mammary Internal",
    "Id": 1010001196,
    "UnitPrice": 31.96,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Breast Reconstruction:Sizers Breast Implant",
    "Id": 1010000728,
    "UnitPrice": 49.37,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Breast Reconstruction:Skin Expansion Implants",
    "Id": 1010001183,
    "UnitPrice": 91.04,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Breast Reconstruction:Surgical Retractor Kits Subcutaneous Tissue Internal Mammary Artery",
    "Id": 1010000851,
    "UnitPrice": 54.86,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management",
    "Id": 1010000146,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Defibrillator/Cardioverter/Pacemakers Implantable",
    "Id": 1010000508,
    "UnitPrice": 61.61,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Defibrillator/Cardioverter/Pacemakers Implantable Resynchronization",
    "Id": 1010000638,
    "UnitPrice": 95.54,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Defibrillator/Cardioverters Implantable",
    "Id": 1010000587,
    "UnitPrice": 95.55,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Defibrillators Implantable",
    "Id": 1010001218,
    "UnitPrice": 82.91,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Defibrillators Implantable Subcutaneous",
    "Id": 1010000866,
    "UnitPrice": 61.45,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Electrocardiographs Ambulatory Loop-Recording Implantable",
    "Id": 1010000761,
    "UnitPrice": 80.53,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Electrodes Defibrillation/Pacing",
    "Id": 1010001329,
    "UnitPrice": 12.09,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Electrodes Pacemaker",
    "Id": 1010001287,
    "UnitPrice": 12.28,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Leads Implantable Defibrillator",
    "Id": 1010001248,
    "UnitPrice": 88.04,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Leads Implantable Defibrillator Subcutaneous",
    "Id": 1010000849,
    "UnitPrice": 35.2,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Leads Implantable Defibrillator/Pacemaker",
    "Id": 1010001319,
    "UnitPrice": 18.5,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Leads Implantable Defibrillator/Pacemaker Resynchronization",
    "Id": 1010000624,
    "UnitPrice": 90.12,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Leads Pacemaker",
    "Id": 1010001187,
    "UnitPrice": 90.28,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Leads Pacemaker Implantable",
    "Id": 1010000678,
    "UnitPrice": 47.64,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Leads Pacemaker Implantable Endocardial",
    "Id": 1010001055,
    "UnitPrice": 15.72,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Leads Pacemaker Implantable Myocardial",
    "Id": 1010001007,
    "UnitPrice": 17.96,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Leads Pacemaker Temporary",
    "Id": 1010000666,
    "UnitPrice": 34.61,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Leads Pacemaker Temporary Endocardial",
    "Id": 1010001188,
    "UnitPrice": 66.8,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Leads Pacemaker Temporary Myocardial",
    "Id": 1010001256,
    "UnitPrice": 56.47,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Mesh Pouches Pacemaker/Defibrillator",
    "Id": 1010001139,
    "UnitPrice": 57.67,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Mesh Pouches Pacemaker/Defibrillator Antibacterial",
    "Id": 1010000867,
    "UnitPrice": 26.83,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Pacemaker Lead Adapters Implantable",
    "Id": 1010001267,
    "UnitPrice": 45.87,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Pacemakers Cardiac",
    "Id": 1010001071,
    "UnitPrice": 37.99,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Pacemakers Cardiac Implantable",
    "Id": 1010001081,
    "UnitPrice": 39.27,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Pacemakers Cardiac Implantable Leadless",
    "Id": 1010000873,
    "UnitPrice": 79.25,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Pacemakers Cardiac Implantable Resynchronization",
    "Id": 1010000623,
    "UnitPrice": 35.29,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Procedure Kit/Trays Lead Extraction Pacemaker/Defibrillator",
    "Id": 1010001356,
    "UnitPrice": 88.97,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Programmer/Testers Implantable Cardiac Pacemaker",
    "Id": 1010001174,
    "UnitPrice": 33.21,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiac Rhythm Management:Recorders Electronic Storage Data Electrocardiography",
    "Id": 1010000565,
    "UnitPrice": 90.6,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular",
    "Id": 1010000147,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheter Introducers Vascular",
    "Id": 1010000852,
    "UnitPrice": 26.79,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Cardiac Electrophysiology Mapping",
    "Id": 1010000892,
    "UnitPrice": 75.78,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Cardiac Flotation Balloon",
    "Id": 1010000967,
    "UnitPrice": 37.38,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Cardiac Flotation Balloon Pulmonary Artery",
    "Id": 1010001230,
    "UnitPrice": 63.17,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Cardiac Flotation Balloon Pulmonary Artery Oximetric",
    "Id": 1010001365,
    "UnitPrice": 27.62,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Cardiac Flotation Balloon Pulmonary Artery Thermal Dilution",
    "Id": 1010001016,
    "UnitPrice": 14.18,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular",
    "Id": 1010000567,
    "UnitPrice": 39.58,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angiography",
    "Id": 1010000965,
    "UnitPrice": 29.11,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angiography Cerebral",
    "Id": 1010000577,
    "UnitPrice": 41.58,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angiography Peripheral",
    "Id": 1010000499,
    "UnitPrice": 22.87,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angiography Visceral",
    "Id": 1010000611,
    "UnitPrice": 20.54,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angioplasty",
    "Id": 1010001238,
    "UnitPrice": 96.64,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angioplasty Atherectomy",
    "Id": 1010001324,
    "UnitPrice": 11.3,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angioplasty Atherectomy Ablation",
    "Id": 1010001313,
    "UnitPrice": 14.14,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angioplasty Atherectomy Extirpative",
    "Id": 1010000509,
    "UnitPrice": 54.5,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angioplasty Balloon",
    "Id": 1010001260,
    "UnitPrice": 85.24,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angioplasty Balloon Coronary",
    "Id": 1010000865,
    "UnitPrice": 70.18,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angioplasty Balloon Coronary Perfusion",
    "Id": 1010001296,
    "UnitPrice": 20.45,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angioplasty Balloon Intracranial Artery",
    "Id": 1010000831,
    "UnitPrice": 50.27,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angioplasty Balloon Peripheral Artery",
    "Id": 1010000829,
    "UnitPrice": 93.64,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angioplasty Balloon Peripheral Artery Drug Delivery",
    "Id": 1010000830,
    "UnitPrice": 60.11,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angioplasty Direct Laser Ablation",
    "Id": 1010001305,
    "UnitPrice": 72.64,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Angioplasty Thermal",
    "Id": 1010000607,
    "UnitPrice": 15.18,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Biopsy Liver",
    "Id": 1010000612,
    "UnitPrice": 65.64,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Blood Gas/pH Monitoring",
    "Id": 1010000613,
    "UnitPrice": 83.97,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Blood Pressure",
    "Id": 1010000966,
    "UnitPrice": 26.36,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Blood Pressure Pressure Transducer",
    "Id": 1010000590,
    "UnitPrice": 16.55,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Brachytherapy",
    "Id": 1010000618,
    "UnitPrice": 50.91,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Cholangiography",
    "Id": 1010000500,
    "UnitPrice": 78.54,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Embolectomy/Thrombectomy",
    "Id": 1010001032,
    "UnitPrice": 48.88,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Embolectomy/Thrombectomy Balloon",
    "Id": 1010000560,
    "UnitPrice": 59.46,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Embolectomy/Thrombectomy Balloon Venous",
    "Id": 1010001025,
    "UnitPrice": 64.68,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Embolectomy/Thrombectomy Fragmentation",
    "Id": 1010000597,
    "UnitPrice": 49.74,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Guidewire Support",
    "Id": 1010000868,
    "UnitPrice": 40.29,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Guiding",
    "Id": 1010001362,
    "UnitPrice": 59.11,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Guiding Coronary Artery",
    "Id": 1010000569,
    "UnitPrice": 98.8,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Guiding Occlusion Crossing Peripheral Artery",
    "Id": 1010000788,
    "UnitPrice": 66.51,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Hemodialysis",
    "Id": 1010001142,
    "UnitPrice": 18.13,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Hemodialysis Central Venous",
    "Id": 1010000510,
    "UnitPrice": 19.1,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Hemodialysis Central Venous Double-Lumen",
    "Id": 1010000578,
    "UnitPrice": 17.57,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Infusion",
    "Id": 1010000557,
    "UnitPrice": 70.53,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Infusion Central Venous",
    "Id": 1010001022,
    "UnitPrice": 36.29,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Infusion Central Venous Peripherally-Inserted",
    "Id": 1010001372,
    "UnitPrice": 83.3,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Infusion Central Venous Tunneled",
    "Id": 1010000595,
    "UnitPrice": 81.24,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Infusion Midline",
    "Id": 1010000558,
    "UnitPrice": 77.71,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Infusion Peripheral",
    "Id": 1010001033,
    "UnitPrice": 22.55,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Infusion Peripheral Indwelling",
    "Id": 1010000800,
    "UnitPrice": 35.66,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Infusion Peripheral Protective",
    "Id": 1010000564,
    "UnitPrice": 38.8,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Infusion/Perfusion",
    "Id": 1010000559,
    "UnitPrice": 18.21,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Intra-Aortic Balloon",
    "Id": 1010000996,
    "UnitPrice": 65.07,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Microflow",
    "Id": 1010000995,
    "UnitPrice": 26.51,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Occlusion",
    "Id": 1010001034,
    "UnitPrice": 51.05,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Occlusion Crossing Coronary Artery",
    "Id": 1010000797,
    "UnitPrice": 57.89,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Occlusion Temporary",
    "Id": 1010000598,
    "UnitPrice": 89.89,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Perfusion",
    "Id": 1010001023,
    "UnitPrice": 27.97,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Perfusion Cerebral",
    "Id": 1010000596,
    "UnitPrice": 81.07,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Perfusion Coronary Artery",
    "Id": 1010001031,
    "UnitPrice": 57.23,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Retrieval",
    "Id": 1010000570,
    "UnitPrice": 43.68,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Retrieval Basket",
    "Id": 1010000631,
    "UnitPrice": 43.36,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Retrieval Snare",
    "Id": 1010001353,
    "UnitPrice": 19.07,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Stent Delivery Aorta",
    "Id": 1010000740,
    "UnitPrice": 13.54,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Ultrasound",
    "Id": 1010000568,
    "UnitPrice": 73.56,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Ultrasound Doppler",
    "Id": 1010000599,
    "UnitPrice": 17.64,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Ultrasound Image",
    "Id": 1010000621,
    "UnitPrice": 17.32,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Ultrasound/Near-Infrared Laser Spectroscopy",
    "Id": 1010000770,
    "UnitPrice": 43.2,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Umbilical",
    "Id": 1010001026,
    "UnitPrice": 25.35,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Catheters Vascular Umbilical Arterial",
    "Id": 1010000589,
    "UnitPrice": 73.09,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Dilators Surgical Vascular",
    "Id": 1010001043,
    "UnitPrice": 59.2,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Guide Wires Cardiovascular",
    "Id": 1010000882,
    "UnitPrice": 31.82,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Guide Wires Cardiovascular Coronary",
    "Id": 1010000891,
    "UnitPrice": 20.34,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Guide Wires Cardiovascular Peripheral",
    "Id": 1010000883,
    "UnitPrice": 64.96,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Guide Wires Cardiovascular Pressure Measuring",
    "Id": 1010000810,
    "UnitPrice": 35.98,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Guide Wires Cardiovascular Ultrasound",
    "Id": 1010000654,
    "UnitPrice": 91.57,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Guide Wires Cerebrovascular",
    "Id": 1010000901,
    "UnitPrice": 62.31,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Occluders Vascular",
    "Id": 1010001327,
    "UnitPrice": 69.28,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Occluders Vascular Intravascular Embolization",
    "Id": 1010001151,
    "UnitPrice": 85.18,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Occluders Vascular Intravascular Embolization Coil",
    "Id": 1010000718,
    "UnitPrice": 47.33,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Occluders Vascular Intravascular Embolization Particulate",
    "Id": 1010000626,
    "UnitPrice": 34.96,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Occluders Vascular Intravascular Embolization Plug",
    "Id": 1010000875,
    "UnitPrice": 93.66,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Procedure Kit/Trays Angiography",
    "Id": 1010001262,
    "UnitPrice": 76.67,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Procedure Kit/Trays Angiography Contrast Media Injector",
    "Id": 1010000821,
    "UnitPrice": 74.2,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Procedure Kit/Trays Angiography Special Procedure",
    "Id": 1010001246,
    "UnitPrice": 72.73,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stent/Grafts",
    "Id": 1010000640,
    "UnitPrice": 72.83,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stent/Grafts Vascular",
    "Id": 1010000555,
    "UnitPrice": 50.36,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stent/Grafts Vascular Aortic",
    "Id": 1010000692,
    "UnitPrice": 37.86,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stent/Grafts Vascular Aortoiliac",
    "Id": 1010000648,
    "UnitPrice": 83.24,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stent/Grafts Vascular Coronary",
    "Id": 1010000691,
    "UnitPrice": 58.25,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stent/Grafts Vascular Peripheral",
    "Id": 1010000630,
    "UnitPrice": 71.63,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular",
    "Id": 1010001275,
    "UnitPrice": 95.94,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Carotid",
    "Id": 1010000627,
    "UnitPrice": 41.8,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Carotid Self-Expanding",
    "Id": 1010000628,
    "UnitPrice": 62.53,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Coronary",
    "Id": 1010001298,
    "UnitPrice": 47.14,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Coronary Balloon-Expandable",
    "Id": 1010000659,
    "UnitPrice": 26.93,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Coronary Balloon-Expandable Bioactive-Coated",
    "Id": 1010000682,
    "UnitPrice": 65.81,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Coronary Balloon-Expandable Drug-Eluting",
    "Id": 1010000625,
    "UnitPrice": 51.01,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Coronary Self-Expanding",
    "Id": 1010000639,
    "UnitPrice": 51.73,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Intracranial Artery",
    "Id": 1010000812,
    "UnitPrice": 65.64,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Intracranial Artery Aneurysm Flow Diversion",
    "Id": 1010000881,
    "UnitPrice": 55.68,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Peripheral",
    "Id": 1010001391,
    "UnitPrice": 43.48,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Peripheral Balloon-Expandable",
    "Id": 1010000660,
    "UnitPrice": 97.7,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Peripheral Balloon-Expandable Iliac",
    "Id": 1010000750,
    "UnitPrice": 39.47,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Peripheral Self-Expanding",
    "Id": 1010000629,
    "UnitPrice": 98.76,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Peripheral Self-Expanding Drug-Eluting",
    "Id": 1010000869,
    "UnitPrice": 22.1,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Peripheral Self-Expanding Iliac",
    "Id": 1010001383,
    "UnitPrice": 79.88,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Stents Vascular Renal Artery",
    "Id": 1010000683,
    "UnitPrice": 17,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Vascular Access Closure Devices",
    "Id": 1010000796,
    "UnitPrice": 56.05,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Vascular Closure Devices",
    "Id": 1010000905,
    "UnitPrice": 82.89,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Vascular Closure Devices Clip",
    "Id": 1010000874,
    "UnitPrice": 71.34,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Vascular Closure Devices Collagen Plug",
    "Id": 1010000906,
    "UnitPrice": 78.42,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Cardiovascular:Vascular Closure Devices Suture",
    "Id": 1010000853,
    "UnitPrice": 32.92,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Chart Paper",
    "Id": 1010000951,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": "LIFEPAK 15 Printer Paper 2/PK"
  },
  {
    "FullyQualifiedName": "Clippers/Blades",
    "Id": 1010000121,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products",
    "Id": 1010000145,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Absorption Pads Linen Protection Disposable",
    "Id": 1010000840,
    "UnitPrice": 52.44,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Antimicrobial Cleansers Gel",
    "Id": 1010001279,
    "UnitPrice": 94.62,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:BD Luer-Lok™ Sterile Syringe Tip Cap Tray",
    "Id": 1010000895,
    "UnitPrice": 271.55,
    "Type": "Service",
    "Description": "BD Luer-Lok™ Sterile Syringe Tip Cap Tray (2000 per Case)"
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Blood Collection Needle Sets",
    "Id": 1010001392,
    "UnitPrice": 40.67,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Blood Collection Needle Sets Protective",
    "Id": 1010001299,
    "UnitPrice": 93.77,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Cannulae Nasal",
    "Id": 1010001244,
    "UnitPrice": 61.31,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Cannulae Nasal Continuous Positive Airway Pressure",
    "Id": 1010000990,
    "UnitPrice": 16.66,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Cannulae Nasal Oxygen Supply",
    "Id": 1010001047,
    "UnitPrice": 79.41,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Cannulae Nasal Oxygen Supply Carbon Dioxide Sampling",
    "Id": 1010001366,
    "UnitPrice": 76.16,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Catheters Tracheal Suction",
    "Id": 1010001035,
    "UnitPrice": 56.28,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Catheters Transtracheal Oxygen Supply",
    "Id": 1010001280,
    "UnitPrice": 11.64,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Covers Shoe",
    "Id": 1010001076,
    "UnitPrice": 30.59,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Decontaminants Chemical Neutralization Oxidizing",
    "Id": 1010000677,
    "UnitPrice": 24.64,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Eyewear Safety",
    "Id": 1010001171,
    "UnitPrice": 70.98,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Gloves Examination/Treatment",
    "Id": 1010001052,
    "UnitPrice": 84.59,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Gloves Surgical",
    "Id": 1010000977,
    "UnitPrice": 42.11,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Gloves Surgical Hypoallergenic",
    "Id": 1010001037,
    "UnitPrice": 35.28,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Gowns Isolation",
    "Id": 1010001070,
    "UnitPrice": 26.79,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Gowns Medical",
    "Id": 1010000969,
    "UnitPrice": 58.84,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Gowns Patient Disposable",
    "Id": 1010000986,
    "UnitPrice": 22.68,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Humidifiers Artificial Airway",
    "Id": 1010001039,
    "UnitPrice": 98.82,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Intravenous Administration Sets",
    "Id": 1010000987,
    "UnitPrice": 79.5,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Intravenous Administration Sets General-Purpose",
    "Id": 1010001282,
    "UnitPrice": 82.84,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Intravenous Port/Connector Disinfecting Caps",
    "Id": 1010000789,
    "UnitPrice": 53.61,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Mailers Specimen Container",
    "Id": 1010001137,
    "UnitPrice": 30.38,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Masks Air-Oxygen",
    "Id": 1010000978,
    "UnitPrice": 27.88,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Masks Air-Oxygen Venturi",
    "Id": 1010000988,
    "UnitPrice": 10.5,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Needles Blood Collection",
    "Id": 1010001053,
    "UnitPrice": 42.26,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Needles Blood Collection Protective",
    "Id": 1010001377,
    "UnitPrice": 87.26,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Respirators Air-Purifying",
    "Id": 1010001373,
    "UnitPrice": 66.6,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Respirators Air-Supplying",
    "Id": 1010000676,
    "UnitPrice": 62.59,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Respirators Air-Supplying Self-Contained",
    "Id": 1010000637,
    "UnitPrice": 14.09,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Resuscitators Pulmonary Manual Disposable",
    "Id": 1010001325,
    "UnitPrice": 86.99,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Scrub Dresses",
    "Id": 1010001075,
    "UnitPrice": 55.77,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Scrub Pants",
    "Id": 1010000776,
    "UnitPrice": 26.61,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Scrub Suits",
    "Id": 1010000979,
    "UnitPrice": 91.68,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Scrub Suits Disposable",
    "Id": 1010001086,
    "UnitPrice": 46.93,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Scrub Tops",
    "Id": 1010000769,
    "UnitPrice": 82.56,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Solutions Intravenous",
    "Id": 1010000877,
    "UnitPrice": 76.7,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Surgical Masks",
    "Id": 1010000989,
    "UnitPrice": 73.62,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Swabs Specimen Collection/Transportation",
    "Id": 1010000556,
    "UnitPrice": 36.39,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Syringes Plunger Prefilled Catheter Flush",
    "Id": 1010000646,
    "UnitPrice": 13.88,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Syringes Plunger Prefilled Catheter Flush Luer Lock",
    "Id": 1010000616,
    "UnitPrice": 90.2,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Thermometers Electronic Infrared",
    "Id": 1010001131,
    "UnitPrice": 35.64,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Thermometers Electronic Infrared Ear",
    "Id": 1010001364,
    "UnitPrice": 96.51,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Towelettes Personal Cleansing",
    "Id": 1010000634,
    "UnitPrice": 20.01,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Towelettes Surface Disinfection",
    "Id": 1010000609,
    "UnitPrice": 54.34,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Tubes Blood Collection",
    "Id": 1010001125,
    "UnitPrice": 35.08,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Tubes Blood Collection Evacuated",
    "Id": 1010001191,
    "UnitPrice": 94.31,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Tubes Tracheal",
    "Id": 1010001132,
    "UnitPrice": 13.32,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Tubing Oxygen Connecting",
    "Id": 1010001010,
    "UnitPrice": 39.78,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Waste Receptacle Liners",
    "Id": 1010000886,
    "UnitPrice": 15.7,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Waste Receptacles Contaminated Material",
    "Id": 1010001090,
    "UnitPrice": 66.91,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "COVID-19 Support Products:Waste-Disposal Units Sharps",
    "Id": 1010001129,
    "UnitPrice": 43.1,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Dental Products",
    "Id": 1010000148,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Dental Products:Acrylic Curing Units Dental",
    "Id": 1010001149,
    "UnitPrice": 38.52,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Analyzers Physiologic Dental Pulp",
    "Id": 1010001049,
    "UnitPrice": 12.29,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Anesthesia Units Dental",
    "Id": 1010001352,
    "UnitPrice": 51.24,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Aspirators Dental",
    "Id": 1010000982,
    "UnitPrice": 63.88,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Broaches Dental Endodontic",
    "Id": 1010001243,
    "UnitPrice": 72.64,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Brushes Dental",
    "Id": 1010000664,
    "UnitPrice": 98.85,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Brushes Dental Prophylaxis",
    "Id": 1010001251,
    "UnitPrice": 60.11,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Burs Dental",
    "Id": 1010000964,
    "UnitPrice": 11.85,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Burs Dental/Oral Surgery",
    "Id": 1010001020,
    "UnitPrice": 92.97,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Capsules Dental Amalgam",
    "Id": 1010001245,
    "UnitPrice": 18.75,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Carriers Dental Amalgam",
    "Id": 1010001215,
    "UnitPrice": 75.02,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Carvers Dental Amalgam",
    "Id": 1010001252,
    "UnitPrice": 65.35,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Carvers Dental Wax",
    "Id": 1010001261,
    "UnitPrice": 99.1,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Cement Dental Resin Composite",
    "Id": 1010001284,
    "UnitPrice": 40.42,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Composite Restorative Material Kits Dental",
    "Id": 1010001250,
    "UnitPrice": 13.23,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Composite Restorative Material Kits Dental Light-Cured",
    "Id": 1010001272,
    "UnitPrice": 51.9,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Composite Restorative Materials Dental",
    "Id": 1010001227,
    "UnitPrice": 43.8,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Curettes Dental/Oral Surgery",
    "Id": 1010000680,
    "UnitPrice": 63.47,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Attachments Semiprecision Partial Denture Implant",
    "Id": 1010000755,
    "UnitPrice": 41.34,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Caps",
    "Id": 1010001316,
    "UnitPrice": 14.08,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Cast/Plaster Rotary Trimmers",
    "Id": 1010000686,
    "UnitPrice": 88.9,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Color/Shade Measuring Instruments",
    "Id": 1010000864,
    "UnitPrice": 25.38,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Crowns Preformed",
    "Id": 1010001041,
    "UnitPrice": 20.98,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Disks Abrasive",
    "Id": 1010001222,
    "UnitPrice": 56.65,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Floss",
    "Id": 1010000983,
    "UnitPrice": 33.29,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Floss Holders",
    "Id": 1010001263,
    "UnitPrice": 36.42,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Hand Instruments",
    "Id": 1010001004,
    "UnitPrice": 69.63,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Implants Endosteal",
    "Id": 1010000689,
    "UnitPrice": 45.3,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Materials Adhesive Impression Material/Tray",
    "Id": 1010001233,
    "UnitPrice": 92.19,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Materials Articulating Paper",
    "Id": 1010001178,
    "UnitPrice": 35.27,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Materials Cavity Liner",
    "Id": 1010001189,
    "UnitPrice": 12.19,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Materials Cement",
    "Id": 1010001042,
    "UnitPrice": 13.09,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Materials Etching Liquid/Gel",
    "Id": 1010001334,
    "UnitPrice": 16.35,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Materials Impression",
    "Id": 1010001224,
    "UnitPrice": 55.14,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Materials Impression Alginate",
    "Id": 1010001225,
    "UnitPrice": 81.85,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Materials Plaque Disclosing",
    "Id": 1010001150,
    "UnitPrice": 25.25,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Materials Primer",
    "Id": 1010000768,
    "UnitPrice": 15.5,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Materials Prophylaxis Paste",
    "Id": 1010001226,
    "UnitPrice": 81.62,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Materials Restorative",
    "Id": 1010001179,
    "UnitPrice": 68.09,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Materials Restorative Alloy",
    "Id": 1010000963,
    "UnitPrice": 75.88,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Materials Restorative Composite Resin Light-Cured",
    "Id": 1010000767,
    "UnitPrice": 92.88,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Materials Restorative Unfilled Resin",
    "Id": 1010001285,
    "UnitPrice": 18.46,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Matrix Band Wedges",
    "Id": 1010001170,
    "UnitPrice": 94.25,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Matrix Bands",
    "Id": 1010001180,
    "UnitPrice": 25.94,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Posts Endodontic",
    "Id": 1010001216,
    "UnitPrice": 92.34,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Root Studs",
    "Id": 1010000690,
    "UnitPrice": 56.26,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dental Stones",
    "Id": 1010001273,
    "UnitPrice": 84.03,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dispensers Dental Alloy/Amalgam",
    "Id": 1010001221,
    "UnitPrice": 94.64,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Dressings Dental Liquid/Paste Periodontal",
    "Id": 1010001181,
    "UnitPrice": 44.81,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Drill Bits Dental Implant Driving",
    "Id": 1010000834,
    "UnitPrice": 77.09,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Driver/Extractors Dental Implant",
    "Id": 1010000824,
    "UnitPrice": 62.82,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Elevators Dental",
    "Id": 1010001281,
    "UnitPrice": 88.96,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Forceps Dental",
    "Id": 1010001136,
    "UnitPrice": 56.09,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Grinders Dental Laboratory",
    "Id": 1010000746,
    "UnitPrice": 28.84,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Handpieces Dental",
    "Id": 1010001005,
    "UnitPrice": 38.05,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Impression Trays Dental",
    "Id": 1010001242,
    "UnitPrice": 86.6,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Irrigators Dental/Oral",
    "Id": 1010000688,
    "UnitPrice": 11.31,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Knives Dental Prosthodontic Plaster",
    "Id": 1010000774,
    "UnitPrice": 88.62,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Mirrors Hand-Held Dental",
    "Id": 1010000832,
    "UnitPrice": 31.82,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Mixer/Dispensers Dental Impression Material",
    "Id": 1010000811,
    "UnitPrice": 72.14,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Needles Aspiration/Irrigation Dental",
    "Id": 1010000663,
    "UnitPrice": 15.07,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Needles Dental Procedure",
    "Id": 1010000642,
    "UnitPrice": 20.69,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Needles Injection Hypodermic Dental",
    "Id": 1010000662,
    "UnitPrice": 52.18,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Needles Suture Dental",
    "Id": 1010000644,
    "UnitPrice": 11.09,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Pins Dental Retention",
    "Id": 1010001253,
    "UnitPrice": 90.1,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Polishing Strips Dental",
    "Id": 1010001198,
    "UnitPrice": 95.85,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Procedure Kit/Trays Dental",
    "Id": 1010000805,
    "UnitPrice": 90.57,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Procedure Kit/Trays Dental Occlusal Splinting",
    "Id": 1010001219,
    "UnitPrice": 73.18,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Procedure Kit/Trays Dental Prophylaxis",
    "Id": 1010001091,
    "UnitPrice": 67.38,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Procedure Kit/Trays Dental Restoration",
    "Id": 1010001228,
    "UnitPrice": 62.05,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Prostheses Dental Fixed Crown",
    "Id": 1010000754,
    "UnitPrice": 41.55,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Prostheses Dental Implantable",
    "Id": 1010001229,
    "UnitPrice": 58.84,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Prosthesis Implantation Instruments Dental",
    "Id": 1010001342,
    "UnitPrice": 16.41,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Punches Dental Prosthesis",
    "Id": 1010000620,
    "UnitPrice": 87.83,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Retainers Dental",
    "Id": 1010000727,
    "UnitPrice": 63.09,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Retractors Dental/Oral Surgery",
    "Id": 1010001093,
    "UnitPrice": 19.71,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Retractors Dental/Oral Surgery Cheek/Lip",
    "Id": 1010000815,
    "UnitPrice": 90.15,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Rubber Dams Dental",
    "Id": 1010001029,
    "UnitPrice": 91.84,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Scalers Dental Ultrasonic",
    "Id": 1010001332,
    "UnitPrice": 32.3,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Scissors Dental",
    "Id": 1010000684,
    "UnitPrice": 59.67,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Scissors Dental/Oral Surgery Gum/Soft Oral Tissue",
    "Id": 1010000685,
    "UnitPrice": 60.48,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Spatulas Dental",
    "Id": 1010000794,
    "UnitPrice": 43.34,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Syringe Cartridge Dental Anesthetic",
    "Id": 1010001258,
    "UnitPrice": 49.51,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Syringe Tips Dental Material",
    "Id": 1010000787,
    "UnitPrice": 81.95,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Syringes Plunger Dental",
    "Id": 1010000645,
    "UnitPrice": 97.29,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Syringes Plunger Dental Aspiration/Irrigation",
    "Id": 1010001259,
    "UnitPrice": 17.06,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Syringes Plunger Dental Impression Material",
    "Id": 1010001283,
    "UnitPrice": 56.02,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Trays Instrument Dental",
    "Id": 1010000850,
    "UnitPrice": 48.29,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:Wire Crimpers Dental Orthodontic",
    "Id": 1010000717,
    "UnitPrice": 52.18,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:X-Ray Film Dental",
    "Id": 1010001100,
    "UnitPrice": 58.22,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:X-Ray Film Holders Dental",
    "Id": 1010001199,
    "UnitPrice": 43.31,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:X-Ray Film Mounts Dental",
    "Id": 1010001249,
    "UnitPrice": 68.5,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Dental Products:X-Ray Film Processors Automatic Dental",
    "Id": 1010001172,
    "UnitPrice": 20.21,
    "Type": "Service",
    "Description": "Sale of dental products for restorative and other purposes."
  },
  {
    "FullyQualifiedName": "Diabetic Care Products",
    "Id": 1010000011,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Diagnostic Equipment / Accessories",
    "Id": 1010000972,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Diagnostic Equipment / Accessories:Digital Forehead and Ear Thermometer",
    "Id": 1010000961,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Diagnostic Test Kits",
    "Id": 1010000012,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Discount",
    "Id": 1010000971,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Discounts",
    "Id": 1010000072,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Discounts / Rebates",
    "Id": 1010000071,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Elbow - Orthopedic Joint",
    "Id": 1010000402,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Elbow - Orthopedic Joint:Prostheses Joint Elbow",
    "Id": 1010001169,
    "UnitPrice": 33.87,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Elbow - Orthopedic Joint:Prostheses Joint Elbow Humeral Component",
    "Id": 1010001156,
    "UnitPrice": 10.46,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Elbow - Orthopedic Joint:Prostheses Joint Elbow Radial Component",
    "Id": 1010001212,
    "UnitPrice": 59.39,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Elbow - Orthopedic Joint:Prostheses Joint Elbow Total",
    "Id": 1010001211,
    "UnitPrice": 19.13,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Elbow - Orthopedic Joint:Prostheses Joint Elbow Ulnar Component",
    "Id": 1010001146,
    "UnitPrice": 68.68,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals",
    "Id": 1010000149,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Endomechanicals:Clip Appliers",
    "Id": 1010001000,
    "UnitPrice": 71.58,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Clip Appliers Gastrointestinal Endoscopic",
    "Id": 1010000679,
    "UnitPrice": 23.54,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Clip Appliers Laparoscopic",
    "Id": 1010000887,
    "UnitPrice": 47.07,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Clip Appliers Vascular",
    "Id": 1010001310,
    "UnitPrice": 67.16,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Forceps Biopsy",
    "Id": 1010000985,
    "UnitPrice": 39.28,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Forceps Biopsy Flexible Endoscopic",
    "Id": 1010001241,
    "UnitPrice": 36.5,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Forceps Biopsy Rigid Endoscopic",
    "Id": 1010001232,
    "UnitPrice": 44.66,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Forceps Electrosurgical",
    "Id": 1010001008,
    "UnitPrice": 27.64,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Laparoscopic Port Closure Kits",
    "Id": 1010000908,
    "UnitPrice": 41.4,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Needle Suture Surgical Blunt Point",
    "Id": 1010000674,
    "UnitPrice": 88.17,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Needles Suture",
    "Id": 1010001061,
    "UnitPrice": 87.68,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Needles Suture Surgical",
    "Id": 1010000615,
    "UnitPrice": 68.43,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Needles Suture Surgical Cutting Edge",
    "Id": 1010000655,
    "UnitPrice": 62.5,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Needles Suture Surgical Taper Point",
    "Id": 1010000672,
    "UnitPrice": 43.74,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Procedure Kit/Trays Suture Removal",
    "Id": 1010001063,
    "UnitPrice": 82.67,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Retrieval Bags Laparoscopy",
    "Id": 1010000766,
    "UnitPrice": 17.36,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Scissors Surgical Laparoscopic",
    "Id": 1010000687,
    "UnitPrice": 46.31,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Scissors Surgical Suture/Stitch Removal",
    "Id": 1010001062,
    "UnitPrice": 67.28,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Stapler/Cutters Surgical Linear",
    "Id": 1010000833,
    "UnitPrice": 20.78,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Staplers",
    "Id": 1010000617,
    "UnitPrice": 57.49,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Staplers Skin",
    "Id": 1010000580,
    "UnitPrice": 57.08,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Staplers Surgical",
    "Id": 1010000647,
    "UnitPrice": 99.37,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Staplers Surgical Circular",
    "Id": 1010000657,
    "UnitPrice": 97.24,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Staplers Surgical Linear",
    "Id": 1010000635,
    "UnitPrice": 16.64,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Staplers Surgical Linear Gastrointestinal Cutting",
    "Id": 1010000636,
    "UnitPrice": 59.85,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Staples",
    "Id": 1010001291,
    "UnitPrice": 35.79,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Staples Gastrointestinal/Internal Organ",
    "Id": 1010000622,
    "UnitPrice": 66.65,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Staples Skin",
    "Id": 1010000658,
    "UnitPrice": 72.62,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Suture Cutters",
    "Id": 1010001200,
    "UnitPrice": 11.39,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Suture Kits",
    "Id": 1010001104,
    "UnitPrice": 90.33,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Suture Units",
    "Id": 1010001231,
    "UnitPrice": 86.77,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Suture Units Arthroscopic",
    "Id": 1010001278,
    "UnitPrice": 24.66,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Suture Units Automatic",
    "Id": 1010001161,
    "UnitPrice": 13.67,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Suture Units Endoscopic Lower Esophageal Sphincter",
    "Id": 1010000735,
    "UnitPrice": 12.59,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures",
    "Id": 1010001064,
    "UnitPrice": 38.62,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Metallic",
    "Id": 1010000726,
    "UnitPrice": 86.7,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Metallic Stainless Steel",
    "Id": 1010001067,
    "UnitPrice": 54.75,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Metallic Stainless Steel Monofilament",
    "Id": 1010001144,
    "UnitPrice": 88.96,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Metallic Stainless Steel Multifilament",
    "Id": 1010001098,
    "UnitPrice": 10.63,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Natural Absorbable Surgical Gut",
    "Id": 1010001121,
    "UnitPrice": 30.51,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Natural Absorbable Surgical Gut Chromium-Treated",
    "Id": 1010000703,
    "UnitPrice": 99.7,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Natural Nonabsorbable Cotton",
    "Id": 1010001122,
    "UnitPrice": 83.62,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Natural Nonabsorbable Silk",
    "Id": 1010001089,
    "UnitPrice": 96.62,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic",
    "Id": 1010000724,
    "UnitPrice": 95.03,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Absorbable",
    "Id": 1010000696,
    "UnitPrice": 32.26,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Absorbable Polydioxanone",
    "Id": 1010001247,
    "UnitPrice": 42.35,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Absorbable Polyglactin",
    "Id": 1010001331,
    "UnitPrice": 47.76,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Absorbable Polyglecaprone",
    "Id": 1010000721,
    "UnitPrice": 87.95,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Absorbable Polyglycolic Acid",
    "Id": 1010001080,
    "UnitPrice": 56.69,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Absorbable Polyglyconate",
    "Id": 1010001240,
    "UnitPrice": 69.42,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Nonabsorbable",
    "Id": 1010000705,
    "UnitPrice": 21.62,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Nonabsorbable Nylon",
    "Id": 1010001078,
    "UnitPrice": 47.57,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Nonabsorbable Nylon Monofilament",
    "Id": 1010000742,
    "UnitPrice": 70.44,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Nonabsorbable Nylon Multifilament",
    "Id": 1010000669,
    "UnitPrice": 79.51,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Nonabsorbable Polybutester",
    "Id": 1010001239,
    "UnitPrice": 59.43,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Nonabsorbable Polyester",
    "Id": 1010001114,
    "UnitPrice": 20.79,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Nonabsorbable Polyester Monofilament",
    "Id": 1010000732,
    "UnitPrice": 64.56,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Nonabsorbable Polyester Multifilament",
    "Id": 1010000733,
    "UnitPrice": 70.45,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Nonabsorbable Polyethylene",
    "Id": 1010001116,
    "UnitPrice": 94.86,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Nonabsorbable Polypropylene",
    "Id": 1010001087,
    "UnitPrice": 42.73,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Nonabsorbable Polytetrafluoroethylene",
    "Id": 1010001322,
    "UnitPrice": 59.89,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Sutures Synthetic Nonabsorbable Polyvinylidene Fluoride Homopolymer/Hexafluoropropylene",
    "Id": 1010000706,
    "UnitPrice": 42.23,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Trocars",
    "Id": 1010001107,
    "UnitPrice": 64.86,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Trocars Abdominal",
    "Id": 1010001108,
    "UnitPrice": 55.24,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Trocars Abdominal Laparoscopic",
    "Id": 1010000778,
    "UnitPrice": 57.94,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Endomechanicals:Trocars Gallbladder",
    "Id": 1010001117,
    "UnitPrice": 14.63,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Financing",
    "Id": 1010000081,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Gauze",
    "Id": 1010000014,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Gloves",
    "Id": 1010000021,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Goggles",
    "Id": 1010000101,
    "UnitPrice": 0.92,
    "Type": "Service",
    "Description": "Anti-Dust, Anti-Impact, Anti-Liquid Spray Compatible with other Glasses, Anti-Scratch, Protective Goggles Anti-Fog"
  },
  {
    "FullyQualifiedName": "Gowns",
    "Id": 1010000022,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Hand Sanitizer",
    "Id": 1010000015,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Heart Valves and Rings",
    "Id": 1010000150,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Heart Valves and Rings:Annuloplasty Ring/Band Implants",
    "Id": 1010001182,
    "UnitPrice": 31.77,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Heart Valves and Rings:Procedure Kit/Trays Implant Delivery Cardiac Valve",
    "Id": 1010000798,
    "UnitPrice": 32.14,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Heart Valves and Rings:Procedure Kit/Trays Implant Delivery Cardiac Valve Aortic",
    "Id": 1010000799,
    "UnitPrice": 24.46,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Heart Valves and Rings:Procedure Kit/Trays Implant Delivery Cardiac Valve Transcatheter",
    "Id": 1010000843,
    "UnitPrice": 21.48,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Heart Valves and Rings:Prostheses Cardiac Valve",
    "Id": 1010001092,
    "UnitPrice": 52.5,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Heart Valves and Rings:Prostheses Cardiac Valve Artificial",
    "Id": 1010001201,
    "UnitPrice": 22.38,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Heart Valves and Rings:Prostheses Cardiac Valve Artificial/Biological Transcatheter",
    "Id": 1010000825,
    "UnitPrice": 48.85,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Heart Valves and Rings:Prostheses Cardiac Valve Biological",
    "Id": 1010001143,
    "UnitPrice": 40.7,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Heart Valves and Rings:Prostheses Cardiac Valve Biological Tissue Leaflet",
    "Id": 1010000862,
    "UnitPrice": 19.16,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Heart Valves and Rings:Prostheses Cardiac Valve Biological Tissue Leaflet Transcatheter Aortic",
    "Id": 1010000826,
    "UnitPrice": 23.76,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Heart Valves and Rings:Prostheses Cardiac Valve Biological Whole Valve Transcatheter Pulmonary",
    "Id": 1010000817,
    "UnitPrice": 31.35,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Heart Valves and Rings:Sizers Cardiac Valve Prosthesis",
    "Id": 1010001290,
    "UnitPrice": 66.33,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Heating, Ventilation, and Air Conditioning (HVAC)",
    "Id": 1010000016,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Hip - Orthopedic Joint",
    "Id": 1010000151,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Hip - Orthopedic Joint:Prostheses Joint Hip",
    "Id": 1010001368,
    "UnitPrice": 77.56,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Hip - Orthopedic Joint:Prostheses Joint Hip Accessory",
    "Id": 1010000909,
    "UnitPrice": 57.08,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Hip - Orthopedic Joint:Prostheses Joint Hip Acetabular Component",
    "Id": 1010001165,
    "UnitPrice": 89.84,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Hip - Orthopedic Joint:Prostheses Joint Hip Acetabular Component Liner",
    "Id": 1010000888,
    "UnitPrice": 24.73,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Hip - Orthopedic Joint:Prostheses Joint Hip Acetabular Component Shell",
    "Id": 1010000894,
    "UnitPrice": 83.31,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Hip - Orthopedic Joint:Prostheses Joint Hip Femoral Component",
    "Id": 1010001213,
    "UnitPrice": 74.1,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Hip - Orthopedic Joint:Prostheses Joint Hip Femoral Component Head",
    "Id": 1010000915,
    "UnitPrice": 81.57,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Hip - Orthopedic Joint:Prostheses Joint Hip Femoral Component Stem",
    "Id": 1010000856,
    "UnitPrice": 85.76,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Hip - Orthopedic Joint:Prostheses Joint Hip Total",
    "Id": 1010001214,
    "UnitPrice": 27.57,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Hip - Orthopedic Joint:Trial Prostheses Joint Hip",
    "Id": 1010001269,
    "UnitPrice": 87.08,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Hip - Orthopedic Joint:Trial Prostheses Joint Hip Acetabular Component",
    "Id": 1010001367,
    "UnitPrice": 35.38,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Hours",
    "Id": 2,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Individual First Aid Kit",
    "Id": 1010000031,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "IV/Extension Sets",
    "Id": 1010000111,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Knee - Orthopedic Joint",
    "Id": 1010000152,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Knee - Orthopedic Joint:Prostheses Joint Knee",
    "Id": 1010001154,
    "UnitPrice": 41.43,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Knee - Orthopedic Joint:Prostheses Joint Knee Accessory",
    "Id": 1010000932,
    "UnitPrice": 83.49,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Knee - Orthopedic Joint:Prostheses Joint Knee Articular Surface",
    "Id": 1010000910,
    "UnitPrice": 88.95,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Knee - Orthopedic Joint:Prostheses Joint Knee Femoral Component",
    "Id": 1010001148,
    "UnitPrice": 68.47,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Knee - Orthopedic Joint:Prostheses Joint Knee Patellar Component",
    "Id": 1010001176,
    "UnitPrice": 45.38,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Knee - Orthopedic Joint:Prostheses Joint Knee Tibial Component",
    "Id": 1010001167,
    "UnitPrice": 69.19,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Knee - Orthopedic Joint:Prostheses Joint Knee Total",
    "Id": 1010001175,
    "UnitPrice": 39.29,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Knee - Orthopedic Joint:Trial Prostheses Joint Knee",
    "Id": 1010001380,
    "UnitPrice": 77.91,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Knee - Orthopedic Joint:Trial Prostheses Joint Knee Patellar Component",
    "Id": 1010000594,
    "UnitPrice": 91.23,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Knee - Orthopedic Joint:Trial Prostheses Joint Knee Tibial Component",
    "Id": 1010000554,
    "UnitPrice": 84.38,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Late Fee",
    "Id": 1010000061,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Masks",
    "Id": 1010000002,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Mobility Aids",
    "Id": 1010000153,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Mobility Aids:Canes",
    "Id": 1010001021,
    "UnitPrice": 97.29,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Mobility Aids:Canes Pedestal Base",
    "Id": 1010001333,
    "UnitPrice": 52.68,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Mobility Aids:Crutches",
    "Id": 1010001028,
    "UnitPrice": 54.57,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Mobility Aids:Crutches Axillary",
    "Id": 1010001276,
    "UnitPrice": 18.81,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Mobility Aids:Crutches Forearm",
    "Id": 1010001315,
    "UnitPrice": 54.25,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Mobility Aids:Crutches Forearm Platform",
    "Id": 1010000777,
    "UnitPrice": 19.65,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Mobility Aids:Walker/Chair Nonwheeled",
    "Id": 1010001320,
    "UnitPrice": 71.47,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Mobility Aids:Walkers",
    "Id": 1010001119,
    "UnitPrice": 31.39,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Mobility Aids:Walkers Folding",
    "Id": 1010001265,
    "UnitPrice": 52.61,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Mobility Aids:Walkers Wheeled",
    "Id": 1010001277,
    "UnitPrice": 25.59,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Mobility Aids:Walkers Wheeled Hospital Ambulation",
    "Id": 1010000809,
    "UnitPrice": 39.13,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Mobility Aids:Wheelchairs",
    "Id": 1010001069,
    "UnitPrice": 67.02,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Mobility Aids:Wheelchairs Mechanical",
    "Id": 1010001311,
    "UnitPrice": 17.68,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Narcan",
    "Id": 1010000041,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Neuromodulation",
    "Id": 1010000154,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Neuromodulation:Leads Electrical Stimulator Spinal Cord Implantable",
    "Id": 1010001307,
    "UnitPrice": 25.6,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Brain",
    "Id": 1010000603,
    "UnitPrice": 45.03,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Brain Psychiatric Therapy",
    "Id": 1010001351,
    "UnitPrice": 62.72,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Brain Tremor",
    "Id": 1010000604,
    "UnitPrice": 10.98,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Neuromuscular",
    "Id": 1010001111,
    "UnitPrice": 82.73,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Neuromuscular Bladder/Bowel Evacuation",
    "Id": 1010001138,
    "UnitPrice": 59.97,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Neuromuscular Incontinence Implantable",
    "Id": 1010001335,
    "UnitPrice": 44.94,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Neuromuscular Incontinence Nonimplantable",
    "Id": 1010001264,
    "UnitPrice": 78.21,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Neuromuscular Multipurpose",
    "Id": 1010000822,
    "UnitPrice": 34.23,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Neuromuscular Obstructive Sleep Apnea Implantable",
    "Id": 1010000861,
    "UnitPrice": 98.79,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Neuromuscular Sleep Apnea",
    "Id": 1010000790,
    "UnitPrice": 32.72,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Neuromuscular/Peripheral Nerve Transcutaneous",
    "Id": 1010000872,
    "UnitPrice": 87.9,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Peripheral Nerve",
    "Id": 1010000586,
    "UnitPrice": 18.22,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Peripheral Nerve Analgesic",
    "Id": 1010000566,
    "UnitPrice": 38.74,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Peripheral Nerve Analgesic Transcutaneous",
    "Id": 1010001112,
    "UnitPrice": 67.01,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Peripheral Nerve Block Monitoring",
    "Id": 1010001190,
    "UnitPrice": 93.55,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Spinal Cord",
    "Id": 1010000605,
    "UnitPrice": 91.48,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Spinal Cord Analgesic",
    "Id": 1010001308,
    "UnitPrice": 24.08,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Vagus Nerve",
    "Id": 1010000650,
    "UnitPrice": 65.21,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Neuromodulation:Stimulators Electrical Vagus Nerve Antiseizure",
    "Id": 1010000606,
    "UnitPrice": 95.51,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement",
    "Id": 1010000155,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint",
    "Id": 1010001083,
    "UnitPrice": 74.19,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Ankle",
    "Id": 1010001207,
    "UnitPrice": 81.53,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Ankle Talar Component",
    "Id": 1010001140,
    "UnitPrice": 80.19,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Ankle Tibial Component",
    "Id": 1010001193,
    "UnitPrice": 17.57,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Elbow",
    "Id": 1010001159,
    "UnitPrice": 43.09,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Elbow Humeral Component",
    "Id": 1010001195,
    "UnitPrice": 69.72,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Elbow Radial Component",
    "Id": 1010001205,
    "UnitPrice": 24.47,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Elbow Total",
    "Id": 1010001185,
    "UnitPrice": 10.83,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Elbow Ulnar Component",
    "Id": 1010001186,
    "UnitPrice": 72.27,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Finger/Thumb",
    "Id": 1010000751,
    "UnitPrice": 65.83,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Hip",
    "Id": 1010001375,
    "UnitPrice": 25.97,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Hip Accessory",
    "Id": 1010000890,
    "UnitPrice": 69.87,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Hip Acetabular Component",
    "Id": 1010001192,
    "UnitPrice": 90.74,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Hip Acetabular Component Liner",
    "Id": 1010000893,
    "UnitPrice": 28.15,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Hip Acetabular Component Shell",
    "Id": 1010000889,
    "UnitPrice": 24.78,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Hip Femoral Component",
    "Id": 1010001147,
    "UnitPrice": 30.18,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Hip Femoral Component Head",
    "Id": 1010000914,
    "UnitPrice": 22.58,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Hip Femoral Component Stem",
    "Id": 1010000913,
    "UnitPrice": 61.7,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Hip Total",
    "Id": 1010001177,
    "UnitPrice": 54.33,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Knee",
    "Id": 1010001153,
    "UnitPrice": 40.51,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Knee Accessory",
    "Id": 1010000931,
    "UnitPrice": 45.32,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Knee Articular Surface",
    "Id": 1010000921,
    "UnitPrice": 42.29,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Knee Femoral Component",
    "Id": 1010001157,
    "UnitPrice": 77.18,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Knee Patellar Component",
    "Id": 1010001197,
    "UnitPrice": 97.57,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Knee Tibial Component",
    "Id": 1010001166,
    "UnitPrice": 86.43,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Knee Total",
    "Id": 1010001206,
    "UnitPrice": 31.35,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Shoulder",
    "Id": 1010001168,
    "UnitPrice": 18.43,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Shoulder Glenoid Component",
    "Id": 1010001234,
    "UnitPrice": 29.42,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Shoulder Humeral Component",
    "Id": 1010001301,
    "UnitPrice": 57,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Shoulder Total",
    "Id": 1010000670,
    "UnitPrice": 29.17,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Temporomandibular",
    "Id": 1010000753,
    "UnitPrice": 22.27,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Temporomandibular Intra-Articular Disc",
    "Id": 1010001330,
    "UnitPrice": 20.63,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Temporomandibular Mandibular Condyle",
    "Id": 1010001294,
    "UnitPrice": 75.35,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Temporomandibular Mandibular Fossa",
    "Id": 1010001381,
    "UnitPrice": 35.37,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Toe",
    "Id": 1010001209,
    "UnitPrice": 61.92,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Wrist",
    "Id": 1010001084,
    "UnitPrice": 54.44,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Wrist Carpal Component",
    "Id": 1010001184,
    "UnitPrice": 64.58,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Prostheses Joint Wrist Radial/Ulnar Head",
    "Id": 1010001217,
    "UnitPrice": 97,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Trial Prostheses Joint",
    "Id": 1010001378,
    "UnitPrice": 48.61,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Trial Prostheses Joint Hip",
    "Id": 1010001268,
    "UnitPrice": 55.28,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Trial Prostheses Joint Hip Acetabular Component",
    "Id": 1010001374,
    "UnitPrice": 82.31,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Trial Prostheses Joint Knee",
    "Id": 1010001379,
    "UnitPrice": 77.58,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Trial Prostheses Joint Knee Patellar Component",
    "Id": 1010000576,
    "UnitPrice": 19.28,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Trial Prostheses Joint Knee Tibial Component",
    "Id": 1010000563,
    "UnitPrice": 55.47,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Trial Prostheses Joint Shoulder",
    "Id": 1010000835,
    "UnitPrice": 68.13,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Orthopedic Joint Replacement:Trial Prostheses Joint Shoulder Humeral Component",
    "Id": 1010000780,
    "UnitPrice": 42.05,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Podiatry",
    "Id": 1010000157,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Podiatry:Foot Implants",
    "Id": 1010000785,
    "UnitPrice": 52.66,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Podiatry:Foot Implants Fracture",
    "Id": 1010000758,
    "UnitPrice": 70.08,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Podiatry:Foot Implants Hammertoe",
    "Id": 1010000773,
    "UnitPrice": 25.51,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Podiatry:Foot Implants Subtarsal",
    "Id": 1010000792,
    "UnitPrice": 27.31,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Podiatry:Hand Drills Foot Care",
    "Id": 1010000845,
    "UnitPrice": 64.52,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Podiatry:Orthoses Foot/Ankle",
    "Id": 1010001336,
    "UnitPrice": 44.75,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Podiatry:Orthoses Lower Limb Ankle-Foot Therapeutic Anti Foot-Drop",
    "Id": 1010000747,
    "UnitPrice": 51.63,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Podiatry:Orthoses Lower Limb Foot",
    "Id": 1010000748,
    "UnitPrice": 77.27,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Podiatry:Orthoses Lower Limb Foot Gait Shoe Modifier Rocker Sole",
    "Id": 1010000795,
    "UnitPrice": 13.3,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Podiatry:Plates Foot",
    "Id": 1010000876,
    "UnitPrice": 15.98,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Podiatry:Prostheses Lower Limb Foot",
    "Id": 1010001056,
    "UnitPrice": 20.76,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment",
    "Id": 1010000156,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Bouffant Cap",
    "Id": 1010000991,
    "UnitPrice": 0.079,
    "Type": "Service",
    "Description": "Blue bouffants – 3 cases (1000 pieces per case)\n\nBlue bouffant (1000 per case)"
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Covers Shoe",
    "Id": 1010000980,
    "UnitPrice": 78,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Eyewear Safety",
    "Id": 1010001134,
    "UnitPrice": 63.18,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Gloves Examination/Treatment",
    "Id": 1010000976,
    "UnitPrice": 34.42,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Gowns Isolation",
    "Id": 1010001133,
    "UnitPrice": 38.87,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Respirators Air-Purifying",
    "Id": 1010001355,
    "UnitPrice": 72.71,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Respirators Air-Supplying",
    "Id": 1010000675,
    "UnitPrice": 66.48,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Respirators Air-Supplying Self-Contained",
    "Id": 1010000681,
    "UnitPrice": 91.1,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Scrub Dresses",
    "Id": 1010001094,
    "UnitPrice": 38.29,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Scrub Pants",
    "Id": 1010000775,
    "UnitPrice": 77.34,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Scrub Suits Disposable",
    "Id": 1010001085,
    "UnitPrice": 32.44,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Scrub Tops",
    "Id": 1010000804,
    "UnitPrice": 34.92,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Shields Splash Face",
    "Id": 1010001046,
    "UnitPrice": 16.71,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Surgical Hoods",
    "Id": 1010000911,
    "UnitPrice": 96.85,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Surgical Masks",
    "Id": 1010001040,
    "UnitPrice": 83.39,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Surgical Togas",
    "Id": 1010000854,
    "UnitPrice": 21.19,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "PPE - Personal Protective Equipment:Waste-Disposal Units Sharps",
    "Id": 1010001128,
    "UnitPrice": 75.54,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Recording Paper",
    "Id": 1010000131,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Relabeling Service",
    "Id": 1010000052,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Services",
    "Id": 1,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Shipping",
    "Id": 1010000003,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Shipping Charges",
    "Id": 1010000962,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Shoulder - Orthopedic Joint",
    "Id": 1010000403,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Shoulder - Orthopedic Joint:Prostheses Joint Shoulder",
    "Id": 1010001158,
    "UnitPrice": 61.15,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Shoulder - Orthopedic Joint:Prostheses Joint Shoulder Glenoid Component",
    "Id": 1010001302,
    "UnitPrice": 79.3,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Shoulder - Orthopedic Joint:Prostheses Joint Shoulder Humeral Component",
    "Id": 1010001286,
    "UnitPrice": 21.44,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Shoulder - Orthopedic Joint:Prostheses Joint Shoulder Total",
    "Id": 1010000752,
    "UnitPrice": 73.37,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Shoulder - Orthopedic Joint:Trial Prostheses Joint Shoulder",
    "Id": 1010000816,
    "UnitPrice": 42.68,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Shoulder - Orthopedic Joint:Trial Prostheses Joint Shoulder Humeral Component",
    "Id": 1010000836,
    "UnitPrice": 61.37,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Specimen Collection Kits",
    "Id": 1010000091,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Spine",
    "Id": 1010000158,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Spine:Bolts Bone Spinal",
    "Id": 1010000871,
    "UnitPrice": 17.22,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Burs Surgical Spine",
    "Id": 1010000702,
    "UnitPrice": 85.45,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Chisels Surgical Spine",
    "Id": 1010000722,
    "UnitPrice": 12.37,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Chisels Surgical Spine Laminectomy",
    "Id": 1010000713,
    "UnitPrice": 43.88,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Connector/Couplers Spinal",
    "Id": 1010000848,
    "UnitPrice": 20.08,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Curettes Surgical Bone Spinal",
    "Id": 1010000665,
    "UnitPrice": 44.28,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Curettes Surgical Bone Spinal Disc",
    "Id": 1010000715,
    "UnitPrice": 97.29,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Dispensers Orthopedic Cement Spinal Surgery",
    "Id": 1010000813,
    "UnitPrice": 38.99,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Hooks Implantable Spinal",
    "Id": 1010000827,
    "UnitPrice": 45.81,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Interbody Spinal Fusion Implants",
    "Id": 1010000736,
    "UnitPrice": 77.96,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Nails Bone Spinal",
    "Id": 1010000846,
    "UnitPrice": 57.21,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Orthopedic External Fixation Systems Spinal",
    "Id": 1010001163,
    "UnitPrice": 66.98,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Orthopedic Internal Fixation Systems Spinal",
    "Id": 1010001162,
    "UnitPrice": 68.07,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Orthopedic Internal Fixation/ Fusion Device Spinal Accessory",
    "Id": 1010000941,
    "UnitPrice": 43.92,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Orthopedic Internal Fixation/ Fusion Device Spinal Plate",
    "Id": 1010000922,
    "UnitPrice": 49.52,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Orthopedic Rail Implants Spinal",
    "Id": 1010000902,
    "UnitPrice": 53.3,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Orthopedic Rod Implants Spinal",
    "Id": 1010000839,
    "UnitPrice": 98.41,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Pins Bone Spinal",
    "Id": 1010000847,
    "UnitPrice": 46.94,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Plates Bone Spinal",
    "Id": 1010000837,
    "UnitPrice": 25.6,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Procedure Kit/Trays Spinal Surgery",
    "Id": 1010000619,
    "UnitPrice": 15.07,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Procedure Kit/Trays Spinal Surgery Kyphoplasty/Vertebroplasty",
    "Id": 1010000823,
    "UnitPrice": 43.96,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Prostheses Intervertebral Disk",
    "Id": 1010000701,
    "UnitPrice": 91.98,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Prostheses Intervertebral Disk Partial",
    "Id": 1010000711,
    "UnitPrice": 95.48,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Prostheses Intervertebral Disk Total",
    "Id": 1010000649,
    "UnitPrice": 84.03,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Punches Surgical Spine",
    "Id": 1010001303,
    "UnitPrice": 66.06,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Retractors Surgical Spine",
    "Id": 1010000806,
    "UnitPrice": 63.42,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Retractors Surgical Spine Cervical",
    "Id": 1010000779,
    "UnitPrice": 71.12,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Retractors Surgical Spine Lumbar Laminectomy",
    "Id": 1010000841,
    "UnitPrice": 81.03,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Screws Bone Spinal",
    "Id": 1010000838,
    "UnitPrice": 90.71,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Spacers Implantable Spinal",
    "Id": 1010000863,
    "UnitPrice": 97.25,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Spinal Interbody Cages",
    "Id": 1010000828,
    "UnitPrice": 83.54,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Spinal Interbody Fusion Implants",
    "Id": 1010000808,
    "UnitPrice": 33.21,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Spine:Spinal Surgery Percutaneous Introducers",
    "Id": 1010000749,
    "UnitPrice": 11.81,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures",
    "Id": 1010000159,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Sutures:Needle Suture Surgical Blunt Point",
    "Id": 1010000673,
    "UnitPrice": 35.71,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Needles Suture",
    "Id": 1010001054,
    "UnitPrice": 20.43,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Needles Suture Dental",
    "Id": 1010000643,
    "UnitPrice": 96.69,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Needles Suture Ophthalmic",
    "Id": 1010000579,
    "UnitPrice": 30.12,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Needles Suture Surgical",
    "Id": 1010000614,
    "UnitPrice": 20.58,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Needles Suture Surgical Cutting Edge",
    "Id": 1010000671,
    "UnitPrice": 77.14,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Needles Suture Surgical Taper Point",
    "Id": 1010000656,
    "UnitPrice": 96.6,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Procedure Kit/Trays Suture Removal",
    "Id": 1010001096,
    "UnitPrice": 58.54,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Suture Kits",
    "Id": 1010001077,
    "UnitPrice": 26.79,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures",
    "Id": 1010001097,
    "UnitPrice": 90.65,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Metallic",
    "Id": 1010000734,
    "UnitPrice": 56.81,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Metallic Stainless Steel",
    "Id": 1010001105,
    "UnitPrice": 32.66,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Metallic Stainless Steel Monofilament",
    "Id": 1010001173,
    "UnitPrice": 93.22,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Metallic Stainless Steel Multifilament",
    "Id": 1010001065,
    "UnitPrice": 87.47,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Natural Absorbable Surgical Gut",
    "Id": 1010001060,
    "UnitPrice": 19.9,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Natural Absorbable Surgical Gut Chromium-Treated",
    "Id": 1010000695,
    "UnitPrice": 99.97,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Natural Nonabsorbable",
    "Id": 1010000667,
    "UnitPrice": 59.99,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Natural Nonabsorbable Cotton",
    "Id": 1010001113,
    "UnitPrice": 48.44,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Natural Nonabsorbable Silk",
    "Id": 1010001088,
    "UnitPrice": 97.46,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic",
    "Id": 1010000723,
    "UnitPrice": 79.21,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Absorbable",
    "Id": 1010000725,
    "UnitPrice": 86.47,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Absorbable Polydioxanone",
    "Id": 1010001223,
    "UnitPrice": 73.22,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Absorbable Polyglactin",
    "Id": 1010001295,
    "UnitPrice": 65.05,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Absorbable Polyglecaprone",
    "Id": 1010000694,
    "UnitPrice": 93.95,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Absorbable Polyglycolic Acid",
    "Id": 1010001079,
    "UnitPrice": 39.09,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Absorbable Polyglyconate",
    "Id": 1010001288,
    "UnitPrice": 74.31,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Nonabsorbable",
    "Id": 1010000704,
    "UnitPrice": 50.55,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Nonabsorbable Nylon",
    "Id": 1010001123,
    "UnitPrice": 55.97,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Nonabsorbable Nylon Monofilament",
    "Id": 1010000741,
    "UnitPrice": 20.22,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Nonabsorbable Nylon Multifilament",
    "Id": 1010000668,
    "UnitPrice": 56.83,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Nonabsorbable Polybutester",
    "Id": 1010001274,
    "UnitPrice": 32.52,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Nonabsorbable Polyester",
    "Id": 1010001124,
    "UnitPrice": 29.99,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Nonabsorbable Polyester Monofilament",
    "Id": 1010000731,
    "UnitPrice": 95.86,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Nonabsorbable Polyester Multifilament",
    "Id": 1010000720,
    "UnitPrice": 30.58,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Nonabsorbable Polyethylene",
    "Id": 1010001115,
    "UnitPrice": 40.39,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Nonabsorbable Polypropylene",
    "Id": 1010001066,
    "UnitPrice": 73.27,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Nonabsorbable Polypropylene/Polyethylene",
    "Id": 1010000904,
    "UnitPrice": 39.01,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Nonabsorbable Polytetrafluoroethylene",
    "Id": 1010001309,
    "UnitPrice": 76.41,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Sutures:Sutures Synthetic Nonabsorbable Polyvinylidene Fluoride Homopolymer/Hexafluoropropylene",
    "Id": 1010000697,
    "UnitPrice": 65.63,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Trauma Implants",
    "Id": 1010000160,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Trauma Implants:Nails Bone",
    "Id": 1010001164,
    "UnitPrice": 75.34,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Trauma Implants:Orthopedic External Fixation Systems",
    "Id": 1010001152,
    "UnitPrice": 90.75,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Trauma Implants:Orthopedic External Fixation Systems Fracture",
    "Id": 1010001130,
    "UnitPrice": 25.69,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Trauma Implants:Orthopedic Internal Fixation Systems",
    "Id": 1010001202,
    "UnitPrice": 69.4,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Trauma Implants:Orthopedic Internal Fixation Systems Fracture",
    "Id": 1010000970,
    "UnitPrice": 66.1,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Trauma Implants:Plates Bone Orthopedic Trauma",
    "Id": 1010000885,
    "UnitPrice": 57.93,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Trauma Implants:Screws Bone Orthopedic Trauma",
    "Id": 1010000903,
    "UnitPrice": 14.66,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology",
    "Id": 1010000161,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Urology:Bladder Support Implants",
    "Id": 1010001072,
    "UnitPrice": 89.85,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Bladder Support Implants Synthetic",
    "Id": 1010000719,
    "UnitPrice": 83.16,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Bougies Urethra Filiform",
    "Id": 1010000712,
    "UnitPrice": 14.07,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary",
    "Id": 1010001017,
    "UnitPrice": 82.76,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary External Drainage",
    "Id": 1010001027,
    "UnitPrice": 37.42,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Nephrostomy",
    "Id": 1010000997,
    "UnitPrice": 42.97,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Nephrostomy Dilatation",
    "Id": 1010000661,
    "UnitPrice": 60.26,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Suprapubic",
    "Id": 1010000641,
    "UnitPrice": 98.74,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Suprapubic Drainage",
    "Id": 1010001024,
    "UnitPrice": 63.32,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Ureteral",
    "Id": 1010000968,
    "UnitPrice": 15.85,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Ureteral Ablation",
    "Id": 1010000600,
    "UnitPrice": 17.52,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Ureteral Dilatation",
    "Id": 1010001015,
    "UnitPrice": 80.67,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Ureteral Drainage",
    "Id": 1010000651,
    "UnitPrice": 77.8,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Ureteral Irrigation",
    "Id": 1010000608,
    "UnitPrice": 43.86,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Ureteral Retrieval",
    "Id": 1010000652,
    "UnitPrice": 79.94,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Urethral",
    "Id": 1010000974,
    "UnitPrice": 95.4,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Urethral Cystography",
    "Id": 1010000998,
    "UnitPrice": 96.91,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Urethral Dilatation",
    "Id": 1010000633,
    "UnitPrice": 95.25,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Urethral Drainage",
    "Id": 1010000632,
    "UnitPrice": 83.15,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Urethral Drainage Intermittent",
    "Id": 1010001289,
    "UnitPrice": 65.43,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Urethral Drainage Self-Retained",
    "Id": 1010001014,
    "UnitPrice": 36.21,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Catheters Urinary Urethral Drainage/Irrigation",
    "Id": 1010000999,
    "UnitPrice": 18.79,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Collectors Urine",
    "Id": 1010001003,
    "UnitPrice": 49.61,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Containers Specimen Urine",
    "Id": 1010001068,
    "UnitPrice": 31.78,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Curettes Surgical Uterine",
    "Id": 1010000716,
    "UnitPrice": 85.79,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Dilators Ureteral",
    "Id": 1010001271,
    "UnitPrice": 22.61,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Dilators Ureteral Access Sheath",
    "Id": 1010000803,
    "UnitPrice": 55.31,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Dilators Urethral",
    "Id": 1010001006,
    "UnitPrice": 56.81,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Exploratory Probes Urethral",
    "Id": 1010001050,
    "UnitPrice": 16.93,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Flowmeters Urine",
    "Id": 1010001127,
    "UnitPrice": 78.55,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Guide Wires Endourological",
    "Id": 1010000884,
    "UnitPrice": 23.89,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Hydrothermal Ablation Systems Endometrial",
    "Id": 1010000610,
    "UnitPrice": 11.02,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Incontinence Barriers Urethral",
    "Id": 1010000588,
    "UnitPrice": 66.87,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Obturators Vaginal",
    "Id": 1010001317,
    "UnitPrice": 67.9,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Penile Tissue Expanders",
    "Id": 1010000698,
    "UnitPrice": 91.37,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Pouches Urinary Drainage",
    "Id": 1010000653,
    "UnitPrice": 48.18,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Pressure Measuring Units",
    "Id": 1010001082,
    "UnitPrice": 75.66,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Pressure Measuring Units Compartmental",
    "Id": 1010001306,
    "UnitPrice": 46.81,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Procedure Kit/Trays Catheterization Urinary Indwelling",
    "Id": 1010001292,
    "UnitPrice": 12.75,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Procedure Kit/Trays Catheterization Urinary Nephrostomy",
    "Id": 1010000844,
    "UnitPrice": 35.54,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Prostheses Penile",
    "Id": 1010001048,
    "UnitPrice": 60.51,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Prostheses Penile Connector",
    "Id": 1010001254,
    "UnitPrice": 67.37,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Prostheses Penile Cylinder",
    "Id": 1010001236,
    "UnitPrice": 58.66,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Prostheses Penile Inflatable",
    "Id": 1010001354,
    "UnitPrice": 38.71,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Prostheses Penile Pump",
    "Id": 1010001235,
    "UnitPrice": 14.65,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Prostheses Penile Reservoir",
    "Id": 1010001312,
    "UnitPrice": 57.82,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Prostheses Penile Rod",
    "Id": 1010001371,
    "UnitPrice": 86.04,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Prostheses Urethral",
    "Id": 1010001057,
    "UnitPrice": 57.05,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Prostheses Urethral Sphincter",
    "Id": 1010001058,
    "UnitPrice": 48.48,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Prostheses Urethral Sphincter Control Pump",
    "Id": 1010001304,
    "UnitPrice": 39.07,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Prostheses Urethral Sphincter Occlusive Cuff",
    "Id": 1010001237,
    "UnitPrice": 81.57,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Prostheses Urethral Sphincter Pressure Regulator",
    "Id": 1010001257,
    "UnitPrice": 34.37,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Resectoscopes Urological",
    "Id": 1010001382,
    "UnitPrice": 82.62,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Retrieval Baskets Urological Stone",
    "Id": 1010001314,
    "UnitPrice": 13.67,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Sampling Kits Midstream Urine",
    "Id": 1010001009,
    "UnitPrice": 75.61,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Scissors Surgical Urinary Tract Endoscopic",
    "Id": 1010000707,
    "UnitPrice": 22.06,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Snares Urinary Tract Endoscopic",
    "Id": 1010000759,
    "UnitPrice": 25.2,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Stents Ureteral",
    "Id": 1010001203,
    "UnitPrice": 18.38,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Stents Urethral",
    "Id": 1010001297,
    "UnitPrice": 91.48,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Stimulators Electrical Neuromuscular Bladder/Bowel Evacuation",
    "Id": 1010001145,
    "UnitPrice": 83.55,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Stimulators Electrical Neuromuscular Incontinence Implantable",
    "Id": 1010001361,
    "UnitPrice": 61.79,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Stimulators Electrical Neuromuscular Incontinence Nonimplantable",
    "Id": 1010001323,
    "UnitPrice": 42.04,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Stone Dislodgers Ureteral",
    "Id": 1010001210,
    "UnitPrice": 96.73,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Stylets Urethral",
    "Id": 1010001103,
    "UnitPrice": 82.33,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Surgical Retractor Kits Urinary Tract",
    "Id": 1010000842,
    "UnitPrice": 17.82,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Tissue Bulking Agents Urologic",
    "Id": 1010000693,
    "UnitPrice": 75.31,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Ureteral Stent Kits",
    "Id": 1010001341,
    "UnitPrice": 43.72,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Ureteroscopes",
    "Id": 1010001120,
    "UnitPrice": 72.18,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Ureteroscopes Flexible",
    "Id": 1010001376,
    "UnitPrice": 99.15,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Urethrotomes",
    "Id": 1010001266,
    "UnitPrice": 49.05,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Urinals",
    "Id": 1010001109,
    "UnitPrice": 91.74,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Urinary Catheterization/Collection Kits",
    "Id": 1010001118,
    "UnitPrice": 31.56,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Urinary Collection Bags",
    "Id": 1010001110,
    "UnitPrice": 54.05,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Urinary Collection Bags Infant",
    "Id": 1010001293,
    "UnitPrice": 13.36,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Urinary Drainage Units",
    "Id": 1010001141,
    "UnitPrice": 23.04,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Urine Strainers",
    "Id": 1010001099,
    "UnitPrice": 98.71,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Urology:Urodynamic Measurement System",
    "Id": 1010001126,
    "UnitPrice": 70.49,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Wipes",
    "Id": 1010000051,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Wrist - Orthopedic Joint",
    "Id": 1010000162,
    "UnitPrice": 0,
    "Type": "Service",
    "Description": ""
  },
  {
    "FullyQualifiedName": "Wrist - Orthopedic Joint:Prostheses Joint Wrist",
    "Id": 1010001074,
    "UnitPrice": 79.39,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Wrist - Orthopedic Joint:Prostheses Joint Wrist Carpal Component",
    "Id": 1010001155,
    "UnitPrice": 90.87,
    "Type": "Service",
    "Description": "Sale of general medical products."
  },
  {
    "FullyQualifiedName": "Wrist - Orthopedic Joint:Prostheses Joint Wrist Radial/Ulnar Head",
    "Id": 1010001160,
    "UnitPrice": 48.54,
    "Type": "Service",
    "Description": "Sale of general medical products."
  }
];

export const products: InvoiceItem[] = jsonData
  .filter(item => item.UnitPrice !== 0)
  .map(item => ({
    id: item.Id,
    name: item.FullyQualifiedName,
    description: item.Description || "",
    price: item.UnitPrice,
    type: item.Type,
    quantity: 0,
    total: 0,
    vendorID: item.FullyQualifiedName.includes("Glove") ? 112 : 94, // Set vendorID based on the condition
  }));
