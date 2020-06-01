cube(`History`, {
  sql: `SELECT * FROM trafficlights.history`,

  refreshKey: {
    every: `1 second`
    // sql: `SELECT UNIX_TIMESTAMP()`
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [createdAt, updatedat]
    },
    total1: {
      sql: `value1`,
      type: `sum`,
    },
    total2: {
      sql: `value2`,
      type: `sum`,
    },
    total: {
      sql: `value1 + value2`,
      type: `sum`
    }
  },
  
  dimensions: {
    createdAt: {
      sql: `created_at`,
      type: `time`
    },

    formatTime: {
      sql: `DATE_FORMAT(DATE_SUB(created_at, INTERVAL 5 HOUR), "%H:%i")`,
      type: `string`
    },

    value1: {
      sql: `value1`,
      type: `number`
    },

    value2: {
      sql: `value2`,
      type: `number`
    },
    
    updatedat: {
      sql: `${CUBE}.\`updatedAt\``,
      type: `time`
    }
  }
});
