'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.DEFAULT_TEMPERATURE = 20
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSavingMode = true;
    this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
    this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18
    this.HIGH_ENERGY_USAGE_LIMIT = 25

  }

  currentTemp() {
    return this.temperature;
  }

  up(){
    if (this.isMaximumTemp()){
      return;
    }
    this.temperature += 1
  }

  down(){
    if (this.isMinimumTemp()) {
      return;
    }
    this.temperature -= 1
  }

  isMinimumTemp() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaximumTemp() {
    if (this.isPowerSavingModeOn() === true) {
      return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_ON;
    }
    return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_OFF;
  }
  
  isPowerSavingModeOn() {
    return this.powerSavingMode;
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    } 
    if (this.temperature < this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage';
    }
    return 'high-usage';
  }
};