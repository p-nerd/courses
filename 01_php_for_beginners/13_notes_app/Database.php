<?php

class Database
{
    public $pdo;
    public $statement;
    public function __construct($credentials, $username = "root", $password = "")
    {
        $dsn       = "mysql:" . http_build_query($credentials, "", ";");
        $this->pdo = new PDO($dsn, $username, $password, [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    }
    public function query($sql, $params = [])
    {
        $this->statement = $this->pdo->prepare($sql);
        $this->statement->execute($params);
        return $this;
    }
    public function find()
    {
        return $this->statement->fetch();
    }
    public function findOrFail()
    {
        $item = $this->find();
        if (!$item) {
            abort();
        }
        return $item;
    }
    public function finds()
    {
        return $this->statement->fetchAll();
    }
}