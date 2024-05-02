"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilesIndex = exports.missingPetsIndex = void 0;
const algoliasearch_1 = __importDefault(require("algoliasearch"));
const client = (0, algoliasearch_1.default)(process.env.ALGOLIA_APPID, process.env.ALGOLIA_ADMINAPIKEY);
const missingPetsIndex = client.initIndex("missingpets");
exports.missingPetsIndex = missingPetsIndex;
const profilesIndex = client.initIndex("profiles");
exports.profilesIndex = profilesIndex;
