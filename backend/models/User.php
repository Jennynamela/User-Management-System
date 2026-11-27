<?php
class User {
    private $id;
    private $username;
    private $password;
    private $email;
    private $role;
    private $resetToken;

    public function __construct($username, $password, $email, $role) {
        $this->username = $username;
        $this->password = $password;
        $this->email = $email;
        $this->role = $role;
    }

    public function getId() {
        return $this->id;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function getUsername() {
        return $this->username;
    }

    public function setUsername($username) {
        $this->username = $username;
    }

    public function getPassword() {
        return $this->password;
    }

    public function setPassword($password) {
        $this->password = $password;
    }

    public function getEmail() {
        return $this->email;
    }

    public function setEmail($email) {
        $this->email = $email;
    }

    public function getRole() {
        return $this->role;
    }

    public function setRole($role) {
        $this->role = $role;
    }

    public function getResetToken() {
        return $this->resetToken;
    }

    public function setResetToken($resetToken) {
        $this->resetToken = $resetToken;
    }
}
?>
