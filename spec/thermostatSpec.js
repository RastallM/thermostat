'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('increases the temperature by 1 degree with up() funtion', function(){
    thermostat.up()
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it('decreases the temperature by 1 with the down() function', function(){
    thermostat.down()
    expect(thermostat.currentTemp()).toEqual(19);
  });

  it('has a minimum temperature of 10', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemp()).toEqual(10);
  });

  it('has a power saving mode which is on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  })

  it('can turn power saving mode off and on', function(){
    thermostat.switchPowerSavingModeOff()
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn()
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  })

  it('can be reset to the default temp', function() {
    for (var i = 0; i < 5; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.currentTemp()).toEqual(20);
  })

  describe('when power saving mode is on', function() {
    it('has a maximum temperature of 25', function() {
      for (var i = 0; i < 6; i++ ){
        thermostat.up()
      }
      expect(thermostat.currentTemp()).toEqual(25);
    })
  })

  describe('when power saving mode if off', function(){
    it('has a maximum temperature of 32', function() {
      thermostat.switchPowerSavingModeOff()
      for (var i = 0; i < 13; i++) {
        thermostat.up()
      }
      expect(thermostat.currentTemp()).toEqual(32);
    })
  })

  describe('displaying energy usage levels', function(){
    describe('when the temperature is below 18 degrees', function() {
      it('is low-usage', function(){
        for (var i = 0; i < 3; i++){
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      })
    })
    describe('when the temperature is between 18 and 25', function(){
      it('is medium-usage', function(){
       expect(thermostat.energyUsage()).toEqual('medium-usage');
      })
    })
    describe('when the temperature is above 25', function(){
      it('is high-usage', function(){
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage')
      })
    })
  })
})