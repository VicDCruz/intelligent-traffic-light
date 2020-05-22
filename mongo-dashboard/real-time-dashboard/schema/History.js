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
      drillMembers: [createdAt, identifier, updatedat]
    },
    
    total: {
      sql: `total`,
      type: `sum`
    }
  },
  
  dimensions: {
    createdAt: {
      sql: `created_at`,
      type: `time`
    },

    formatTime: {
      sql: `DATE_FORMAT(DATE_SUB(created_at, INTERVAL 5 HOUR), "%h:%i:%s")`,
      type: `string`
    },
    
    identifier: {
      sql: `identifier`,
      type: `string`
    },
    
    updatedat: {
      sql: `${CUBE}.\`updatedAt\``,
      type: `time`
    }
  }
});
