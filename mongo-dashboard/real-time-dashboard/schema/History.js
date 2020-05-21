cube(`History`, {
  sql: `SELECT * FROM trafficlights.history`,
  
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
