<?php
require_once '../models/User.php';

class UserController {
    public static function getAllUsers() {
    $users = User::getAll();
    return $users;
    }

    public static function createUser($username, $password, $email, $role) {
        $user = new User($username, $password, $email, $role);
        $user->save();
    }

    public static function getUserById($id) {
        $user = User::getById($id);
        return $user;
    }

    public static function updateUser($id, $username, $password, $email, $role) {
        $user = User::getById($id);
        if ($user) {
            $user->setUsername($username);
            $user->setPassword($password);
            $user->setEmail($email);
            $user->setRole($role);
            $user->save();
            return true;
        }
        return false;
    }

    public static function deleteUser($id) {
        $user = User::getById($id);
        if ($user) {
            $user->delete();
            return true;
        }
        return false;
    }

    public static function forgotPassword($email) {
        $user = User::getByEmail($email);
        if ($user) {
            $token = generateToken();
            $user->setResetToken($token);
            $user->save();
            sendPasswordResetEmail($user->getEmail(), $token);

            return true;
        }
        return false;
    }

    public static function resetPassword($token, $password) {
        $user = User::getByResetToken($token);
        if ($user) {
            $user->setPassword($password);
            $user->setResetToken(null);
            $user->save();
            return true;
        }
        return false;
    }
}
?>
