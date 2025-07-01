## 副本集合

副本集合（Replica Set）也被称为集群（cluster）。独立的实例不是部署的好选择，因为集群能更好的应对单点故障。

> With a single server, you are at risk of creating both a bottleneck, and a single point of failure for your applications
>
> 在单一服务器中，您有为应用程序中创建瓶颈，或者单一故障点的风险。

集群分为三种

- Primary，默认，负责数据的读写
- Secondary，负责同步 Primary 的日志来更新自己的数据，保证自身数据和 Primary 一致，后期可以设置为已读，来分担 Primary 的压力。（读写分离一般会设置 Secondary 为可读）
- Arbiter，平时什么都不做，在 Primary 宕机后，投票选出主节点（做集群时可以没有）

采用树桩搭建节点

### 节点搭建

```conf
# primary.conf    
dbpath=D:\MongoDBCluster\Test\shard0_primary\data
logpath=D:\MongoDBCluster\Test\shard0_primary\log\shard0_primary.log    
pidfilepath=D:\MongoDBCluster\Test\shard0_primary\shard0_primary.pid    
directoryperdb=true    
logappend=true   
replSet=replSet_demo
port=30000
bind_ip=127.0.0.1
```

```bash
mongod --config D:\MongoDBCluster\Test\shard0_primary\primary.conf --serviceName "mongodb_primary" --serviceDisplayName "mongodb priamry" --install
```





