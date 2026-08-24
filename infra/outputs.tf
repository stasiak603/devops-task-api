output "security_group_id" {
  description = "ID do Security Group criado para a Task API"
  value       = aws_security_group.task_api_sg.id
}

output "aws_region" {
  description = "Regiao utilizada no provisionamento"
  value       = var.aws_region
}