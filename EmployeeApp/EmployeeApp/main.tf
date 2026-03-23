terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0" # Version goes here
    }
  }
}

provider "aws" {
  region = "us-east-1" # Your region
}

resource "aws_instance" "example" {
  ami           = "ami-0fb000fce1f78f9c7"
  instance_type = "t2.micro"
}