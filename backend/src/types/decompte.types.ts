// Decompte types
export interface IDecompte {
  id: string;
  numSituation: number;
  contractId: string;
  entrepriseId: string;
  montantHt: number;
  montantTtc: number;
  tvaRate?: number;
  devise: string;
  financeur: string;
  description: string;
  status: DecompteStatus;
  workflowId?: string;
  submittedAt?: Date;
  approvedAt?: Date;
  rejectedAt?: Date;
  rejectedReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum DecompteStatus {
  BROUILLON = 'BROUILLON',
  SOUMIS = 'SOUMIS',
  EN_VALIDATION_DOCUMENTS = 'EN_VALIDATION_DOCUMENTS',
  EN_VALIDATION_TECHNIQUE = 'EN_VALIDATION_TECHNIQUE',
  EN_VALIDATION_CONTRAT = 'EN_VALIDATION_CONTRAT',
  EN_VALIDATION_BUDGETAIRE = 'EN_VALIDATION_BUDGETAIRE',
  EN_ARBITRAGE_DG = 'EN_ARBITRAGE_DG',
  APPROUVÉ_FINAL = 'APPROUVÉ_FINAL',
  ODP_GÉNÉRÉ = 'ODP_GÉNÉRÉ',
  TRANSMIS_TRÉSOR = 'TRANSMIS_TRÉSOR',
  PAYÉ_PARTIEL = 'PAYÉ_PARTIEL',
  PAYÉ_TOTAL = 'PAYÉ_TOTAL',
  PAYÉ_CLÔTURÉ = 'PAYÉ_CLÔTURÉ',
  REJETÉ_AUTO = 'REJETÉ_AUTO',
  REJETÉ_MISSION_CONTRÔLE = 'REJETÉ_MISSION_CONTRÔLE',
  REJETÉ_DIRECTION_TECHNIQUE = 'REJETÉ_DIRECTION_TECHNIQUE',
  REJETÉ_DMC = 'REJETÉ_DMC',
  REJETÉ_DAF = 'REJETÉ_DAF',
  REJETÉ_DG = 'REJETÉ_DG',
  EN_ATTENTE_CORRECTION = 'EN_ATTENTE_CORRECTION',
  EN_ATTENTE_ESCALADE = 'EN_ATTENTE_ESCALADE',
}

export interface CreateDecompteDTO {
  numSituation: number;
  contractId: string;
  montantHt: number;
  montantTtc: number;
  tvaRate?: number;
  devise: string;
  financeur: string;
  description: string;
}

export interface UpdateDecompteDTO {
  montantHt?: number;
  montantTtc?: number;
  tvaRate?: number;
  description?: string;
}

// Document types
export interface IDocument {
  id: string;
  decompteId: string;
  documentType: string;
  fileName: string;
  filePath: string;
  fileSize: number;
  fileHash: string;
  mimeType: string;
  uploadedBy: string;
  uploadedAt: Date;
  replacedAt?: Date;
  replacedBy?: string;
  createdAt: Date;
}

export interface IValidation {
  id: string;
  decompteId: string;
  validationType: string;
  validatorId?: string;
  status: ValidationStatus;
  decisionAt?: Date;
  motifRejet?: string;
  comments?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum ValidationStatus {
  EN_ATTENTE = 'EN_ATTENTE',
  APPROUVÉ = 'APPROUVÉ',
  REJETÉ = 'REJETÉ',
  RECONDUIT = 'RECONDUIT',
}

// Workflow types
export interface IWorkflow {
  id: string;
  name: string;
  financeur: string;
  isActive: boolean;
  steps: WorkflowStep[];
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkflowStep {
  ordre: number;
  nom: string;
  roleResponsable: string;
  delaiJours: number;
  criteresValidation: string[];
  actionsPossibles: string[];
  parallelize?: boolean;
}
