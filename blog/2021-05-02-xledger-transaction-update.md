---
slug: Xledger Transactions update in daas
title: Xledger transactions udpate
author: Yuan Gu
author_title: Back End Engineer @ Grasplabs
tags: [xledger]
---

## Update on XLedger Transactions

Most of the xledger resources are updated by attribute "modifiedAt" which means daas-service is grabbing the records are modified 
between the "modifiedAt" time and now datetime.

Transactions, including arTransactions, apTransactions and transactions are different. When transactions got updated, it will be reflected in
recentTransactions.

