import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Beeper, beepers } from '../models/beeper';

export const createBeeper = (req: Request, res: Response) => {
  const { status } = req.body;
  const newBeeper: Beeper = {
    id: uuidv4(),
    status: status || 'produced',
    productionDate: new Date(),
  };
  beepers.push(newBeeper);
  res.status(201).json(newBeeper);
};

export const getAllBeepers = (req: Request, res: Response) => {
  res.json(beepers);
};

export const getBeeperById = (req: Request, res: Response) => {
  const beeper = beepers.find(b => b.id === req.params.id);
  if (beeper) {
    res.json(beeper);
  } else {
    res.status(404).json({ message: 'Beeper not found' });
  }
};

export const updateBeeper = (req: Request, res: Response) => {
  const index = beepers.findIndex(b => b.id === req.params.id);
  if (index !== -1) {
    beepers[index] = { ...beepers[index], ...req.body };
    res.json(beepers[index]);
  } else {
    res.status(404).json({ message: 'Beeper not found' });
  }
};

export const deleteBeeper = (req: Request, res: Response) => {
  const index = beepers.findIndex(b => b.id === req.params.id);
  if (index !== -1) {
    beepers.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Beeper not found' });
  }
};

export const activateBeeper = (req: Request, res: Response) => {
  const beeper = beepers.find(b => b.id === req.params.id);
  if (beeper) {
    if (beeper.status !== 'deployed') {
      return res.status(400).json({ message: 'Beeper must be deployed before activation' });
    }
    
    // Start the detonation countdown
    setTimeout(() => {
      beeper.status = 'detonated';
      beeper.deploymentDate = new Date();
    }, 10000);

    res.json({ message: 'Beeper activated', countdown: 10 });
  } else {
    res.status(404).json({ message: 'Beeper not found' });
  }
};