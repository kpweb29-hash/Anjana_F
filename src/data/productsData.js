export const productsData = {
  ferrous: {
    name: "Ferrous Metal",
    subcategories: {
      ss_pipess: {
        name: "SS Pipes",
        products: [
          {
            id: "ss-pipe-304",
            name: "Stainless Steel Pipe 304",
            image: "/images/products/ss304.jpg",
            description: "High-quality SS Pipe 304 for industrial use.",
          },
          {
            id: "ss-pipe-316",
            name: "Stainless Steel Pipe 316",
            image: "/images/products/ss316.jpg",
            description: "High corrosion resistance SS 316 pipe.",
          }
        ]
      },

      ss_tubes: {
        name: "SS Tubes",
        products: [
          {
            id: "ss-tube-304",
            name: "SS Tube 304",
            image: "/images/products/ss-tube-304.jpg",
            description: "Durable stainless steel tube.",
          }
        ]
      }
    }
  },

  // ADD ALL OTHER 7 CATEGORIES SAME WAY…
    nonFerrous: { 
    name: "Non-Ferrous Metal",
    subcategories: {
      copper: {
        name: "Copper",
        products: [
          {
            id: "copper-sheet",
            name: "Copper Sheet",
            image: "/images/products/copper-sheet.jpg", 
            description: "High conductivity copper sheet.",
          } 
        ]
      }
    }
  },
    industrialFlanges: {
    name: "Industrial Flanges",
    subcategories: {
      weld_neck: {
        name: "Weld Neck Flanges",
        products: [
            {
            id: "weld-neck-flange",
            name: "Weld Neck Flange",
            image: "/images/products/weld-neck-flange.jpg",
            description: "Durable weld neck flange for piping systems.",
          }
        ]
      }
    }   
    },
    industrialValves: {
    name: "Industrial Valves",
    subcategories: {
        gate_valves: {
        name: "Gate Valves",
        products: [
          {
            id: "gate-valve",
            name: "Gate Valve",
            image: "/images/products/gate-valve.jpg",
            description: "Robust gate valve for fluid control.",
          }
        ]
      }
    }
    },
    industrialFittings: {
    name: "Industrial Fittings",
    subcategories: {
        elbow_fittings: {
        name: "Elbow Fittings",
        products: [
          {
            id: "elbow-fitting",
            name: "Elbow Fitting",
            image: "/images/products/elbow-fitting.jpg",
            description: "High-quality elbow fitting for piping systems.",
          }
        ]
        }
    }
    },
    dairyFittings: {    
    name: "Dairy Fittings",
    subcategories: {
        tri_clamp_fittings: {
        name: "Tri-Clamp Fittings",
        products: [
          {
            id: "tri-clamp-fitting",
            name: "Tri-Clamp Fitting",
            image: "/images/products/tri-clamp-fitting.jpg",
            description: "Sanitary tri-clamp fitting for dairy applications.",
          }
        ]
        }
    }   
    },
    fasteners: {
    name: "Fasteners",
    subcategories: {
        bolts: {
        name: "Bolts",
        products: [
          {
            id: "stainless-steel-bolt",
            name: "Stainless Steel Bolt",
            image: "/images/products/stainless-steel-bolt.jpg",
            description: "Durable stainless steel bolt for industrial use.",
          }
        ]
        }
    }   
    },
    perforatedSheet: {
    name: "Perforated Sheet",
    subcategories: {
        metal_sheets: {
        name: "Metal Sheets",
        products: [
            {
            id: "perforated-metal-sheet",
            name: "Perforated Metal Sheet",
            image: "/images/products/perforated-metal-sheet.jpg",
            description: "Versatile perforated metal sheet for various applications.",
          }
        ]
        }
    }   
    }   
};
