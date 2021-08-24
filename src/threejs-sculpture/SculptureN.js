import { BoxGeometry, MeshBasicMaterial, Color, Mesh } from "three";

import { createPedestalEdges } from "./create-pedestal-edges.js";

import {
    sculptToThreeJSMaterial,
    sculptToThreeJSMesh,
    glslToThreeJSMaterial,
    glslToThreeJSMesh,
} from "shader-park-core";
import { defaultFragSourceGLSL } from "shader-park-core";

export class Sculpture {
    constructor(isGlsl, source, msdfTexture) {
        this.uniformsToExclude = {
            sculptureCenter: 0,
            msdf: 0,
            opacity: 0,
            time: 0,
            stepSize: 0,
            _scale: 1,
            resolution: 0,
        };
        this.IsGLSL = isGlsl;
        this.payload = { msdfTexture };
        this.source = source;
        this.compileError = null;
        if (isGlsl) {
            try {
                this.mesh = glslToThreeJSMesh(source, this.payload);
            } catch (error) {
                console.error(error);
                this.mesh = glslToThreeJSMesh(
                    defaultFragSourceGLSL,
                    this.payload
                );
                this.compileError = error;
                // throw(e);
            }
        } else {
            try {
                this.mesh = sculptToThreeJSMesh(source, this.payload);
            } catch (error) {
                console.error(error);
                this.mesh = sculptToThreeJSMesh(
                    '\nlet jsonObj = {\n    "rs369202065": { chromosome: 1, genotype: "AA" },\n    "rs199476136": { chromosome: 2, genotype: "AC" },\n    "rs190214723": { chromosome: 3, genotype: "CC" },\n    "rs3131972": { chromosome: 4, genotype: "GG" },\n    "rs12562034": { chromosome: 5, genotype: "GA" },\n    "rs115093905": { chromosome: 6, genotype: "GG" },\n    "rs11888922": { chromosome: 7, genotype: "TC" },\n    "rs730402": { chromosome: 8, genotype: "AG" },\n    "rs763297": { chromosome: 9, genotype: "TC" },\n    "rs9653546": { chromosome: 10, genotype: "AG" },\n    "r6545760": { chromosome: 11, genotype: "AG" },\n    "rs17400093": { chromosome: 12, genotype: "TT" },\n    "rs17328175": { chromosome: 13, genotype: "??" },\n    "rs1005038": { chromosome: 14, genotype: "TC" },\n    "rs11721321": { chromosome: 15, genotype: "TC" },\n    "rs7652589": { chromosome: 16, genotype: "AG" },\n    "rs7648041": { chromosome: 17, genotype: "TC" },\n    "rs4678029": { chromosome: 18, genotype: "TT" },\n    "rs1501900": { chromosome: 19, genotype: "TA" },\n    "rs1814740": { chromosome: 20, genotype: "AG" },\n    "rs16832787": { chromosome: 21, genotype: "GG" },\n    "rs1405687": { chromosome: 22, genotype: "GG" },\n    "rs2851057": { chromosome: 23, genotype: "TG" },\n  \t"rs3692020634": { chromosome: 1, genotype: "AA" },\n  \t"rs1994761399": { chromosome: 2, genotype: "AC" },\n  "rs19021472399": { chromosome: 3, genotype: "CC" },\n    "rs31cs3197299": { chromosome: 4, genotype: "CT" },\n    "rs12sc56203499": { chromosome: 5, genotype: "GA" },\n    "rs115093909599": { chromosome: 6, genotype: "GG" },\n    "rs118s8892200": { chromosome: 7, genotype: "AA" },\n    "rs730hd402979": { chromosome: 8, genotype: "AG" },\n    "rs763h279799": { chromosome: 9, genotype: "TC" },\n    "rs965h3574699": { chromosome: 10, genotype: "AG" },\n    "r6547h5767099": { chromosome: 11, genotype: "AG" },\n    "rs17h40707093": { chromosome: 12, genotype: "CG" },\n    "rs17893278175": { chromosome: 13, genotype: "AT" },\n    "rs108h90jk885038": { chromosome: 14, genotype: "TC" },\n    "rs11721321": { chromosome: 15, genotype: "TC" },\n    "rs7652589": { chromosome: 16, genotype: "AG" },\n    "rs76489041": { chromosome: 17, genotype: "CG" },\n    "rs467998029": { chromosome: 18, genotype: "CA" },\n    "rs150991900": { chromosome: 19, genotype: "TA" },\n    "rs181994740": { chromosome: 20, genotype: "CT" },\n    "rs1689932787": { chromosome: 21, genotype: "GT" },\n    "rs140995687": { chromosome: 22, genotype: "TC" },\n    "rs2859991057": { chromosome: 23, genotype: "TC" },\n};\nlet colorObj = {\n    "1st" : {\n        "A" : vec3(1.0, 0.0, 0.0),\n        "C" : vec3(0.0, 0.0, 1.0),\n        "G" : vec3(0.0,1.0,0.0),\n        "T" : vec3(1.0, 1.0, 0.0),\n        "?" : vec3(0.0,0.0,0.0)\n    },\n    "A" : {\n        "A" : vec3(-2.5, 0.0, -0.50),\n        "C" : vec3(0.4, -0.50, 0.5),\n        "G" : vec3(-0.5,0.50,-0.5),\n        "T" : vec3(-1.5,0.8,-0.5),\n        "?" : vec3(1.0,1.0,1.0)\n    },\n    "C" : {\n        "A" : vec3(-0.4,0.0,-2.5),\n        "C" : vec3(0.0,0.0,2.5),\n        "G" : vec3(0.0,-1.2,-2.5),\n        "T" : vec3(0.2,1.2,2.5),\n        "?" : vec3(0.0,0.0,0.0)\n    },\n    "G" : {\n        "A" : vec3(-0.8,-2.5,0.30),\n        "C" : vec3(0.0,-2.5,-1.2),\n        "G" : vec3(0.0,-2.5,0.0),\n        "T" : vec3(1.2,2.5,0.2),\n        "?" :  vec3(0.0,0.0,0.0)\n    },\n    "T" : {\n        "A" : vec3(-2.5, -2.5, -0.5),\n        "C" : vec3(0.1,-0.50,0.9),\n        "G" : vec3(0.1,-0.50,0.7),\n        "T" : vec3(-2.5, -2.5, 0.0),\n        "?" : vec3(0.0,0.0,0.0)\n    },\n    "?" :{\n        "?" :  vec3(0.0,0.0,0.0)\n    }\n}\n\n//sphere(0.3);\nlet  shapeStr = (jsonList, colorObj) => {\n    let thickness = 0.03, zero = 0.0;\n    let xyzPhosphate = [vec3(0.2, 0.2, zero), vec3(-0.2, -0.2, zero)];\n    let xyzSnp = [[vec3(0.2, 0.2, zero), vec3(0.02, 0.02, zero)], [vec3(-0.2, -0.2,zero), vec3(-0.02, -0.02, zero)] ];\n\trotateX(PI/3);\n    let createStrand = (vec3Color1, vec3Color2) => {  \n        rotateX(PI/3);\n        let pairPhosphates = function () {\n            color(vec3(1.0,1.0,1.0));\n            line(xyzPhosphate[0], xyzPhosphate[0], thickness * 2);\n            line(xyzPhosphate[1], xyzPhosphate[1], thickness * 2);\n        };\n        let pairSnps = function () {\n          \trotateZ(2.75);\n            color(vec3Color1);\n            line(xyzSnp[0][0], xyzSnp[0][1], thickness);\n            color(vec3Color2);\n            line(xyzSnp[1][0], xyzSnp[1][1], thickness);\n        }\n        pairSnps();\n        pairPhosphates();\n        displace(-0.2, 0.1041, 0.0141); \n\n    \n    };\n    displace(-0.3,-1.930,1.0);\n\n    let getColorGene = (jsonObj, colorObj) => {\n        for (let [key,value] of Object.entries(jsonList)) {\n        createStrand(colorObj["1st"][[value.genotype[0]]],colorObj[value.genotype[0]][value.genotype[1]])\n        }\n    }\n    getColorGene(jsonObj, colorObj)\n}\nshapeStr(jsonObj, colorObj);\n',
                    this.payload
                );
                this.compileError = error;
            }
            this.uniforms = this.mesh.material.uniformDescriptions;
            this.uniforms = this.uniforms.filter(
                (uniform) => !(uniform.name in this.uniformsToExclude)
            );
        }
        const pedestalGeom = new BoxGeometry(2, 1, 2);
        this.opacity = 0.0;
        this.stepSize = 0.8;
        const pedestalMat = new MeshBasicMaterial({
            color: new Color(0.95, 0.95, 0.95),
            transparent: true,
            opacity: this.opacity,
        });
        this.pedestal = new Mesh(pedestalGeom, pedestalMat);
        this.sepBuffer = 0.05; // Small gap between sculpture and pedestal prevents z-fighting
        this.pedestal.position.set(0, -1.5 - this.sepBuffer, 0);
        this.mesh.add(this.pedestal);
        this.pedestalEdges = createPedestalEdges(2, 1);
        this.pedestalEdges.position.set(0, -1.5 - this.sepBuffer, 0);
        // this.mesh.add(this.pedestalEdges);
        this.selected = false;
        this.setOpacity(0.0);
    }

    setMSDFTexture(texture) {
        // this.MSDFTexture = texture;
        this.payload.msdfTexture = texture;
        // this.refreshMaterial();
    }

    selectedSculpture(selected) {
        if (!this.pedestal.visible) {
            return;
        }
        this.mesh.remove(this.pedestalEdges);
        if (selected) {
            this.pedestalEdges = createPedestalEdges(2, 1, 0.015);
            this.pedestalEdges.position.set(0, -1.5 - this.sepBuffer, 0);
            this.mesh.add(this.pedestalEdges);
        } else {
            this.pedestalEdges = createPedestalEdges(2, 1);
            this.pedestalEdges.position.set(0, -1.5 - this.sepBuffer, 0);
            this.mesh.add(this.pedestalEdges);
        }
        this.selected = selected;
    }

    setOpacity(value) {
        this.opacity = value;
        this.mesh.visible = value !== 0.0;
        this.pedestal.material.opacity = this.opacity;
    }

    refreshMaterial(newSource) {
        if (newSource) {
            this.source = newSource;
        }
        if (this.IsGLSL) {
            try {
                this.mesh.material = glslToThreeJSMaterial(
                    this.source,
                    this.payload
                );
            } catch (e) {
                console.error(e);
                throw e;
            }
        } else {
            try {
                this.mesh.material = sculptToThreeJSMaterial(
                    this.source,
                    this.payload
                );
            } catch (e) {
                throw e;
            }
            this.uniforms = this.mesh.material.uniformDescriptions;
            this.uniforms = this.uniforms.filter(
                (uniform) => !(uniform.name in this.uniformsToExclude)
            );
        }
    }

    update(uniforms) {
        this.mesh.material.uniforms["opacity"].value = this.opacity;
        this.mesh.material.uniforms["msdf"].value = this.payload.msdfTexture;
        uniforms.forEach((uniform) => {
            if (uniform && uniform.name) {
                this.mesh.material.uniforms[uniform.name].value = uniform.value;
            }
        });
    }
}
